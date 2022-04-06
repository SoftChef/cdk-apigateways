
import {
  HttpApi,
} from '@aws-cdk/aws-apigatewayv2-alpha';
import {
  RestApi as SoftChefRestApi,
} from '@softchef/cdk-restapi';
import {
  Duration,
  Stack,
} from 'aws-cdk-lib';
import {
  RestApi,
} from 'aws-cdk-lib/aws-apigateway';
import {
  AllowedMethods,
  CacheCookieBehavior,
  CachedMethods,
  CacheHeaderBehavior,
  CachePolicy,
  CacheQueryStringBehavior,
  Distribution,
  OriginProtocolPolicy,
  OriginSslPolicy,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import {
  HttpOrigin,
  S3Origin,
} from 'aws-cdk-lib/aws-cloudfront-origins';
import {
  Bucket,
  IBucket,
} from 'aws-cdk-lib/aws-s3';
import {
  BucketDeployment,
  ISource,
} from 'aws-cdk-lib/aws-s3-deployment';
import {
  Construct,
} from 'constructs';
import {
  DistributionProps,
} from './distribution';
import {
  Documentation,
} from './documentation';
import { OriginApiAuthorizationType } from './origin-api-authorization-type';
import {
  OriginApiConfig,
} from './origin-api-config';
import { RedocBundling } from './redoc-bundling';

const DEFAULT_DOCUMENTATION_PREFIX_PATH: string = 'docs';

export interface ApiGatewaysProps {
  /**
   * All of APIs stage name, all stage names must be the same.
   */
  readonly stageName: string;
  /**
   * Mix the APIs with specified behaviors.
   */
  readonly originApisConfig: OriginApiConfig[];
  /**
   * Specify the CloudFront distribution properties.
   */
  readonly distribution?: DistributionProps;
  /**
   * Specify the documentation config.
   */
  readonly documentation: Documentation;
}

export class ApiGateways extends Construct {
  /**
   * CloudFront distribution
   */
  public distribution: Distribution;
  /**
   * S3 bucket
   */
  private s3Bucket: IBucket;

  constructor(scope: Construct, id: string, props: ApiGatewaysProps) {
    super(scope, id);
    this.s3Bucket = this.createOrUseExistsBucket(props);
    this.distribution = this.createDistribution(props);
    this.generateDocumentationPage(props);
  }
  /**
   * Create or use exists S3 bucket
   * @param props ApiGatewaysProps
   * @returns IBucket
   */
  private createOrUseExistsBucket(props: ApiGatewaysProps): IBucket {
    if (props.documentation.s3Bucket) {
      return props.documentation.s3Bucket;
    } else {
      return new Bucket(this, 'Bucket');
    };
  }
  /**
   * Create CloudFront distribution to mix all of API & documentation website
   * @param props ApiGatewaysProps
   * @returns Distribution
   */
  private createDistribution(props: ApiGatewaysProps): Distribution {
    const distribution = new Distribution(this, 'Distribution', {
      ...props.distribution,
      defaultBehavior: {
        origin: new S3Origin(this.s3Bucket, {
          originPath: props.documentation.docsPrefix ?? DEFAULT_DOCUMENTATION_PREFIX_PATH,
        }),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
      },
      defaultRootObject: props.distribution?.defaultRootObject ?? 'index.html',
    });
    for (let originApiConfig of props.originApisConfig) {
      let apiId: string;
      if (originApiConfig.originApi instanceof RestApi) {
        apiId = originApiConfig.originApi.restApiId;
      } else if (originApiConfig.originApi instanceof SoftChefRestApi) {
        apiId = originApiConfig.originApi.restApiId;
      } else if (originApiConfig.originApi instanceof HttpApi) {
        apiId = originApiConfig.originApi.httpApiId;
      } else {
        apiId = 'unknown';
      }
      const executeApiDomain: string = `${apiId}.execute-api.${Stack.of(this).region}.amazonaws.com`;
      const httpOrigin = new HttpOrigin(executeApiDomain, {
        originPath: '/',
        originSslProtocols: [OriginSslPolicy.TLS_V1_2],
        protocolPolicy: OriginProtocolPolicy.HTTPS_ONLY,
      });
      let defaultCachePolicy: CachePolicy | undefined;
      if (originApiConfig.cachePolicy === undefined) {
        let headerBehavior: CacheCookieBehavior;
        let queryStringBehavior: CacheQueryStringBehavior;
        if (originApiConfig.originApiAuthorizationType === OriginApiAuthorizationType.COGNITO) {
          headerBehavior = CacheHeaderBehavior.allowList(...[
            'Authorization',
          ]);
          queryStringBehavior = CacheQueryStringBehavior.all();
        } else if (originApiConfig.originApiAuthorizationType === OriginApiAuthorizationType.IAM) {
          headerBehavior = CacheHeaderBehavior.allowList(...[
            'Authorization',
            'Host',
          ]);
          queryStringBehavior = CacheQueryStringBehavior.all();
        } else {
          headerBehavior = CacheHeaderBehavior.none();
          queryStringBehavior = CacheQueryStringBehavior.none();
        }
        defaultCachePolicy = new CachePolicy(this, `DefaultCachePolicy-${originApiConfig.path}`, {
          minTtl: Duration.seconds(0),
          maxTtl: Duration.seconds(1),
          defaultTtl: Duration.seconds(0),
          headerBehavior: headerBehavior,
          queryStringBehavior: queryStringBehavior,
          cookieBehavior: CacheCookieBehavior.none(),
          enableAcceptEncodingGzip: true,
          enableAcceptEncodingBrotli: true,
        });
      }
      distribution.addBehavior(`${props.stageName}/${originApiConfig.path}*`, httpOrigin, {
        allowedMethods: originApiConfig.allowedMethods ?? AllowedMethods.ALLOW_ALL,
        cachedMethods: originApiConfig.cachedMethods ?? CachedMethods.CACHE_GET_HEAD,
        cachePolicy: originApiConfig.cachePolicy ?? defaultCachePolicy,
        compress: originApiConfig.compress ?? true,
        originRequestPolicy: originApiConfig.originRequestPolicy,
        responseHeadersPolicy: originApiConfig.responseHeadersPolicy,
        viewerProtocolPolicy: originApiConfig.viewerProtocolPolicy ?? ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      });
    }
    return distribution;
  }
  /**
   * Generate documentation static web page and upload to specified s3 bucket.
   * @param props ApiGatewayMixProps
   * @returns void
   */
  private generateDocumentationPage(props: ApiGatewaysProps): void {
    let source: ISource;
    const pannelType: string = props.documentation.pannelType ?? 'Redoc';
    if (pannelType === 'Redoc') {
      source = RedocBundling.bundling({
        source: props.documentation.file!,
        customPage: props.documentation.customPage ?? {},
      });
    } else {
      throw new Error(`props.documentation.pannelType[${pannelType}] is not supported`);
    }
    new BucketDeployment(this, 'DocumentationPage', {
      destinationBucket: this.s3Bucket,
      destinationKeyPrefix: props.documentation.docsPrefix?.replace(/^\//, '') ?? DEFAULT_DOCUMENTATION_PREFIX_PATH,
      sources: [
        source,
      ],
      prune: true,
    });
  }
}