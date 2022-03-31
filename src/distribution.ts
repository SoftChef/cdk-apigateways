import {
  ICertificate,
} from 'aws-cdk-lib/aws-certificatemanager';

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
}