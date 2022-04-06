import {
  ICertificate,
} from 'aws-cdk-lib/aws-certificatemanager';
import {
  ErrorResponse,
  GeoRestriction,
  HttpVersion,
  SecurityPolicyProtocol,
} from 'aws-cdk-lib/aws-cloudfront';
import {
  IBucket,
} from 'aws-cdk-lib/aws-s3';

export interface DistributionProps {
  /**
   * Alternative domain names for this distribution.
   *
   * If you want to use your own domain name, such as www.example.com, instead of the cloudfront.net domain name,
   * you can add an alternate domain name to your distribution. If you attach a certificate to the distribution,
   * you must add (at least one of) the domain names of the certificate to this list.
   *
   * @default - The distribution will only support the default generated name (e.g., d111111abcdef8.cloudfront.net)
   */
  readonly domainNames?: string[];
  /**
   * A certificate to associate with the distribution. The certificate must be located in N. Virginia (us-east-1).
   *
   * @default - the CloudFront wildcard certificate (*.cloudfront.net) will be used.
   */
  readonly certificate?: ICertificate;
  /**
   * The object that you want CloudFront to request from your origin (for example, index.html)
   * when a viewer requests the root URL for your distribution. If no default object is set, the
   * request goes to the origin's root (e.g., example.com/).
   *
   * @default - no default root object
   */
  readonly defaultRootObject?: string;
  /**
   * Any comments you want to include about the distribution.
   *
   * @default - no comment
   */
  readonly comment?: string;
  /**
   * Enable or disable the distribution.
   *
   * @default - true
   */
  readonly enabled?: boolean;
  /**
    * Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address.
    *
    * If you specify false, CloudFront responds to IPv6 DNS requests with the DNS response code NOERROR and with no IP addresses.
    * This allows viewers to submit a second request, for an IPv4 address for your distribution.
    *
    * @default - true
    */
  readonly enableIpv6?: boolean;
  /**
    * Enable access logging for the distribution.
    *
    * @default - false, unless `logBucket` is specified.
    */
  readonly enableLogging?: boolean;
  /**
   * Controls the countries in which your content is distributed.
   *
   * @default - No geographic restrictions
   * @stability stable
   */
  readonly geoRestriction?: GeoRestriction;
  /**
  * Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront.
  *
  * For viewers and CloudFront to use HTTP/2, viewers must support TLS 1.2 or later, and must support server name identification (SNI).
  *
  * @default HttpVersion.HTTP2
  * @stability stable
  */
  readonly httpVersion?: HttpVersion;
  /**
   * The Amazon S3 bucket to store the access logs in.
   *
   * @default - A bucket is created if `enableLogging` is true
   * @stability stable
   */
  readonly logBucket?: IBucket;
  /**
  * Specifies whether you want CloudFront to include cookies in access logs.
  *
  * @default false
  * @stability stable
  */
  readonly logIncludesCookies?: boolean;
  /**
  * An optional string that you want CloudFront to prefix to the access log filenames for this distribution.
  *
  * @default - no prefix
  * @stability stable
  */
  readonly logFilePrefix?: string;
  /**
   * Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution.
   *
   * To specify a web ACL created using the latest version of AWS WAF, use the ACL ARN, for example
   * `arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a`.
   * To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `473e64fd-f30b-4765-81a0-62ad96dd167a`.
   *
   * @default - No AWS Web Application Firewall web access control list (web ACL).
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestParameters.
   * @stability stable
   */
  readonly webAclId?: string;
  /**
  * How CloudFront should handle requests that are not successful (e.g., PageNotFound).
  *
  * @default - No custom error responses.
  * @stability stable
  */
  readonly errorResponses?: ErrorResponse[];
  /**
  * The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections.
  *
  * CloudFront serves your objects only to browsers or devices that support at
  * least the SSL version that you specify.
  *
  * @default - SecurityPolicyProtocol.TLS_V1_2_2021 if the '
  * @stability stable
  * @aws-cdk /aws-cloudfront:defaultSecurityPolicyTLSv1.2_2021' feature flag is set; otherwise, SecurityPolicyProtocol.TLS_V1_2_2019.
  */
  readonly minimumProtocolVersion?: SecurityPolicyProtocol;
}