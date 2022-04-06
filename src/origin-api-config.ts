import {
  HttpApi,
} from '@aws-cdk/aws-apigatewayv2-alpha';
import {
  RestApi as SoftChefRestApi,
} from '@softchef/cdk-restapi';
import {
  RestApi,
} from 'aws-cdk-lib/aws-apigateway';
import {
  AllowedMethods,
  CachedMethods,
  ICachePolicy,
  IOriginRequestPolicy,
  IResponseHeadersPolicy,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import {
  OriginApiAuthorizationType,
} from './origin-api-authorization-type';

export interface OriginApiConfig {
  /**
   * The origin api path.
   * Ex: https://{ApiId}.execute-api.{region}.amazonaws.com/{StageName}/articles, the path is articles.
   */
  readonly path: string;
  /**
   * The origin api are supported AWS RestApi/HttpApi & @softchef/cdk-restapi
   */
  readonly originApi: RestApi | HttpApi | SoftChefRestApi;
  /**
   * The origin api which authorization type
   *
   * @default none
   */
  readonly originApiAuthorizationType?: OriginApiAuthorizationType;
  /**
   * HTTP methods to allow for this behavior.
   *
   * @default AllowedMethods.ALLOW_GET_HEAD
   * @stability stable
   */
  readonly allowedMethods?: AllowedMethods;
  /**
  * HTTP methods to cache for this behavior.
  *
  * @default CachedMethods.CACHE_GET_HEAD
  * @stability stable
  */
  readonly cachedMethods?: CachedMethods;
  /**
  * The cache policy for this behavior.
  *
  * The cache policy determines what values are included in the cache key,
  * and the time-to-live (TTL) values for the cache.
  *
  * @default CachePolicy.CACHING_OPTIMIZED
  * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html.
  * @stability stable
  */
  readonly cachePolicy?: ICachePolicy;
  /**
  * Whether you want CloudFront to automatically compress certain files for this cache behavior.
  *
  * See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#compressed-content-cloudfront-file-types
  * for file types CloudFront will compress.
  *
  * @default true
  * @stability stable
  */
  readonly compress?: boolean;
  /**
  * The origin request policy for this behavior.
  *
  * The origin request policy determines which values (e.g., headers, cookies)
  * are included in requests that CloudFront sends to the origin.
  *
  * @default - none
  * @stability stable
  */
  readonly originRequestPolicy?: IOriginRequestPolicy;
  /**
  * The response headers policy for this behavior.
  *
  * The response headers policy determines which headers are included in responses
  *
  * @default - none
  * @stability stable
  */
  readonly responseHeadersPolicy?: IResponseHeadersPolicy;
  /**
   * The protocol that viewers can use to access the files controlled by this behavior.
   *
   * @default ViewerProtocolPolicy.ALLOW_ALL
   * @stability stable
   */
  readonly viewerProtocolPolicy?: ViewerProtocolPolicy;
}