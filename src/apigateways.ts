
import {
  HttpApi,
} from '@aws-cdk/aws-apigatewayv2-alpha';
import {
  RestApi as SoftChefRestApi,
} from '@softchef/cdk-restapi';
import {
  Stack,
} from 'aws-cdk-lib';
import {
  RestApi,
} from 'aws-cdk-lib/aws-apigateway';
import {
  AllowedMethods,
  CachedMethods,
  CachePolicy,
  Distribution,
  OriginRequestPolicy,
  ResponseHeadersPolicy,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import {
  HttpOrigin, S3Origin,
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
  readonly originApisConfig: {
    [pathPattern: string]: OriginApiConfig;
  };
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
      defaultBehavior: {
        origin: new S3Origin(this.s3Bucket, {
          originPath: props.documentation.docsPrefix ?? DEFAULT_DOCUMENTATION_PREFIX_PATH,
        }),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
      },
      domainNames: props.distribution?.domainNames,
      certificate: props.distribution?.certificate,
      defaultRootObject: props.distribution?.defaultRootObject ?? 'index.html',
      comment: props.distribution?.comment,
      enableIpv6: props.distribution?.enableIpv6,
      enabled: props.distribution?.enabled,
      enableLogging: props.distribution?.enableLogging,
    });
    for (let pathPattern in props.originApisConfig) {
      const originApiConfig = props.originApisConfig[pathPattern];
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
      distribution.addBehavior(`${props.stageName}/${pathPattern}*`, new HttpOrigin(executeApiDomain, {
        originPath: '/',
      }), {
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: AllowedMethods.ALLOW_ALL,
        cachedMethods: CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: CachePolicy.CACHING_DISABLED,
        originRequestPolicy: OriginRequestPolicy.ALL_VIEWER,
        responseHeadersPolicy: ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT,
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