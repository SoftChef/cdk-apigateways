# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGateways <a name="ApiGateways" id="@softchef/cdk-apigateways.ApiGateways"></a>

#### Initializers <a name="Initializers" id="@softchef/cdk-apigateways.ApiGateways.Initializer"></a>

```typescript
import { ApiGateways } from '@softchef/cdk-apigateways'

new ApiGateways(scope: Construct, id: string, props: ApiGatewaysProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-apigateways.ApiGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@softchef/cdk-apigateways.ApiGateways.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@softchef/cdk-apigateways.ApiGateways.Initializer.parameter.props">props</a></code> | <code><a href="#@softchef/cdk-apigateways.ApiGatewaysProps">ApiGatewaysProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@softchef/cdk-apigateways.ApiGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@softchef/cdk-apigateways.ApiGateways.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@softchef/cdk-apigateways.ApiGateways.Initializer.parameter.props"></a>

- *Type:* <a href="#@softchef/cdk-apigateways.ApiGatewaysProps">ApiGatewaysProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@softchef/cdk-apigateways.ApiGateways.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@softchef/cdk-apigateways.ApiGateways.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@softchef/cdk-apigateways.ApiGateways.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@softchef/cdk-apigateways.ApiGateways.isConstruct"></a>

```typescript
import { ApiGateways } from '@softchef/cdk-apigateways'

ApiGateways.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@softchef/cdk-apigateways.ApiGateways.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-apigateways.ApiGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@softchef/cdk-apigateways.ApiGateways.property.distribution">distribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.Distribution</code> | CloudFront distribution. |

---

##### `node`<sup>Required</sup> <a name="node" id="@softchef/cdk-apigateways.ApiGateways.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@softchef/cdk-apigateways.ApiGateways.property.distribution"></a>

```typescript
public readonly distribution: Distribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.Distribution

CloudFront distribution.

---


## Structs <a name="Structs" id="Structs"></a>

### ApiGatewaysProps <a name="ApiGatewaysProps" id="@softchef/cdk-apigateways.ApiGatewaysProps"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-apigateways.ApiGatewaysProps.Initializer"></a>

```typescript
import { ApiGatewaysProps } from '@softchef/cdk-apigateways'

const apiGatewaysProps: ApiGatewaysProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-apigateways.ApiGatewaysProps.property.documentation">documentation</a></code> | <code><a href="#@softchef/cdk-apigateways.Documentation">Documentation</a></code> | Specify the documentation config. |
| <code><a href="#@softchef/cdk-apigateways.ApiGatewaysProps.property.originApisConfig">originApisConfig</a></code> | <code><a href="#@softchef/cdk-apigateways.OriginApiConfig">OriginApiConfig</a>[]</code> | Mix the APIs with specified behaviors. |
| <code><a href="#@softchef/cdk-apigateways.ApiGatewaysProps.property.stageName">stageName</a></code> | <code>string</code> | All of APIs stage name, all stage names must be the same. |
| <code><a href="#@softchef/cdk-apigateways.ApiGatewaysProps.property.distribution">distribution</a></code> | <code><a href="#@softchef/cdk-apigateways.DistributionProps">DistributionProps</a></code> | Specify the CloudFront distribution properties. |

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@softchef/cdk-apigateways.ApiGatewaysProps.property.documentation"></a>

```typescript
public readonly documentation: Documentation;
```

- *Type:* <a href="#@softchef/cdk-apigateways.Documentation">Documentation</a>

Specify the documentation config.

---

##### `originApisConfig`<sup>Required</sup> <a name="originApisConfig" id="@softchef/cdk-apigateways.ApiGatewaysProps.property.originApisConfig"></a>

```typescript
public readonly originApisConfig: OriginApiConfig[];
```

- *Type:* <a href="#@softchef/cdk-apigateways.OriginApiConfig">OriginApiConfig</a>[]

Mix the APIs with specified behaviors.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@softchef/cdk-apigateways.ApiGatewaysProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

All of APIs stage name, all stage names must be the same.

---

##### `distribution`<sup>Optional</sup> <a name="distribution" id="@softchef/cdk-apigateways.ApiGatewaysProps.property.distribution"></a>

```typescript
public readonly distribution: DistributionProps;
```

- *Type:* <a href="#@softchef/cdk-apigateways.DistributionProps">DistributionProps</a>

Specify the CloudFront distribution properties.

---

### CustomPage <a name="CustomPage" id="@softchef/cdk-apigateways.CustomPage"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-apigateways.CustomPage.Initializer"></a>

```typescript
import { CustomPage } from '@softchef/cdk-apigateways'

const customPage: CustomPage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-apigateways.CustomPage.property.cssStyles">cssStyles</a></code> | <code>string</code> | Specify css styles to embedded to static page. |
| <code><a href="#@softchef/cdk-apigateways.CustomPage.property.pageTitle">pageTitle</a></code> | <code>string</code> | Specify page title to static page. |

---

##### `cssStyles`<sup>Optional</sup> <a name="cssStyles" id="@softchef/cdk-apigateways.CustomPage.property.cssStyles"></a>

```typescript
public readonly cssStyles: string;
```

- *Type:* string

Specify css styles to embedded to static page.

---

##### `pageTitle`<sup>Optional</sup> <a name="pageTitle" id="@softchef/cdk-apigateways.CustomPage.property.pageTitle"></a>

```typescript
public readonly pageTitle: string;
```

- *Type:* string

Specify page title to static page.

---

### DistributionProps <a name="DistributionProps" id="@softchef/cdk-apigateways.DistributionProps"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-apigateways.DistributionProps.Initializer"></a>

```typescript
import { DistributionProps } from '@softchef/cdk-apigateways'

const distributionProps: DistributionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | A certificate to associate with the distribution. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.comment">comment</a></code> | <code>string</code> | Any comments you want to include about the distribution. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.defaultRootObject">defaultRootObject</a></code> | <code>string</code> | The object that you want CloudFront to request from your origin (for example, index.html) when a viewer requests the root URL for your distribution. If no default object is set, the request goes to the origin's root (e.g., example.com/). |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | Alternative domain names for this distribution. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.enabled">enabled</a></code> | <code>boolean</code> | Enable or disable the distribution. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.enableIpv6">enableIpv6</a></code> | <code>boolean</code> | Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.enableLogging">enableLogging</a></code> | <code>boolean</code> | Enable access logging for the distribution. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.errorResponses">errorResponses</a></code> | <code>aws-cdk-lib.aws_cloudfront.ErrorResponse[]</code> | How CloudFront should handle requests that are not successful (e.g., PageNotFound). |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.geoRestriction">geoRestriction</a></code> | <code>aws-cdk-lib.aws_cloudfront.GeoRestriction</code> | Controls the countries in which your content is distributed. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.httpVersion">httpVersion</a></code> | <code>aws-cdk-lib.aws_cloudfront.HttpVersion</code> | Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.logBucket">logBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket to store the access logs in. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.logFilePrefix">logFilePrefix</a></code> | <code>string</code> | An optional string that you want CloudFront to prefix to the access log filenames for this distribution. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.logIncludesCookies">logIncludesCookies</a></code> | <code>boolean</code> | Specifies whether you want CloudFront to include cookies in access logs. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.minimumProtocolVersion">minimumProtocolVersion</a></code> | <code>aws-cdk-lib.aws_cloudfront.SecurityPolicyProtocol</code> | The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections. |
| <code><a href="#@softchef/cdk-apigateways.DistributionProps.property.webAclId">webAclId</a></code> | <code>string</code> | Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution. |

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@softchef/cdk-apigateways.DistributionProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* the CloudFront wildcard certificate (*.cloudfront.net) will be used.

A certificate to associate with the distribution.

The certificate must be located in N. Virginia (us-east-1).

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@softchef/cdk-apigateways.DistributionProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string
- *Default:* no comment

Any comments you want to include about the distribution.

---

##### `defaultRootObject`<sup>Optional</sup> <a name="defaultRootObject" id="@softchef/cdk-apigateways.DistributionProps.property.defaultRootObject"></a>

```typescript
public readonly defaultRootObject: string;
```

- *Type:* string
- *Default:* no default root object

The object that you want CloudFront to request from your origin (for example, index.html) when a viewer requests the root URL for your distribution. If no default object is set, the request goes to the origin's root (e.g., example.com/).

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@softchef/cdk-apigateways.DistributionProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]
- *Default:* The distribution will only support the default generated name (e.g., d111111abcdef8.cloudfront.net)

Alternative domain names for this distribution.

If you want to use your own domain name, such as www.example.com, instead of the cloudfront.net domain name,
you can add an alternate domain name to your distribution. If you attach a certificate to the distribution,
you must add (at least one of) the domain names of the certificate to this list.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@softchef/cdk-apigateways.DistributionProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Enable or disable the distribution.

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@softchef/cdk-apigateways.DistributionProps.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean;
```

- *Type:* boolean
- *Default:* true

Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address.

If you specify false, CloudFront responds to IPv6 DNS requests with the DNS response code NOERROR and with no IP addresses.
This allows viewers to submit a second request, for an IPv4 address for your distribution.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@softchef/cdk-apigateways.DistributionProps.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean;
```

- *Type:* boolean
- *Default:* false, unless `logBucket` is specified.

Enable access logging for the distribution.

---

##### `errorResponses`<sup>Optional</sup> <a name="errorResponses" id="@softchef/cdk-apigateways.DistributionProps.property.errorResponses"></a>

```typescript
public readonly errorResponses: ErrorResponse[];
```

- *Type:* aws-cdk-lib.aws_cloudfront.ErrorResponse[]
- *Default:* No custom error responses.

How CloudFront should handle requests that are not successful (e.g., PageNotFound).

---

##### `geoRestriction`<sup>Optional</sup> <a name="geoRestriction" id="@softchef/cdk-apigateways.DistributionProps.property.geoRestriction"></a>

```typescript
public readonly geoRestriction: GeoRestriction;
```

- *Type:* aws-cdk-lib.aws_cloudfront.GeoRestriction
- *Default:* No geographic restrictions

Controls the countries in which your content is distributed.

---

##### `httpVersion`<sup>Optional</sup> <a name="httpVersion" id="@softchef/cdk-apigateways.DistributionProps.property.httpVersion"></a>

```typescript
public readonly httpVersion: HttpVersion;
```

- *Type:* aws-cdk-lib.aws_cloudfront.HttpVersion
- *Default:* HttpVersion.HTTP2

Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront.

For viewers and CloudFront to use HTTP/2, viewers must support TLS 1.2 or later, and must support server name identification (SNI).

---

##### `logBucket`<sup>Optional</sup> <a name="logBucket" id="@softchef/cdk-apigateways.DistributionProps.property.logBucket"></a>

```typescript
public readonly logBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* A bucket is created if `enableLogging` is true

The Amazon S3 bucket to store the access logs in.

---

##### `logFilePrefix`<sup>Optional</sup> <a name="logFilePrefix" id="@softchef/cdk-apigateways.DistributionProps.property.logFilePrefix"></a>

```typescript
public readonly logFilePrefix: string;
```

- *Type:* string
- *Default:* no prefix

An optional string that you want CloudFront to prefix to the access log filenames for this distribution.

---

##### `logIncludesCookies`<sup>Optional</sup> <a name="logIncludesCookies" id="@softchef/cdk-apigateways.DistributionProps.property.logIncludesCookies"></a>

```typescript
public readonly logIncludesCookies: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether you want CloudFront to include cookies in access logs.

---

##### `minimumProtocolVersion`<sup>Optional</sup> <a name="minimumProtocolVersion" id="@softchef/cdk-apigateways.DistributionProps.property.minimumProtocolVersion"></a>

```typescript
public readonly minimumProtocolVersion: SecurityPolicyProtocol;
```

- *Type:* aws-cdk-lib.aws_cloudfront.SecurityPolicyProtocol
- *Default:* SecurityPolicyProtocol.TLS_V1_2_2021 if the '

The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections.

CloudFront serves your objects only to browsers or devices that support at
least the SSL version that you specify.

---

##### `webAclId`<sup>Optional</sup> <a name="webAclId" id="@softchef/cdk-apigateways.DistributionProps.property.webAclId"></a>

```typescript
public readonly webAclId: string;
```

- *Type:* string
- *Default:* No AWS Web Application Firewall web access control list (web ACL).

Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution.

To specify a web ACL created using the latest version of AWS WAF, use the ACL ARN, for example
`arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a`.
To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `473e64fd-f30b-4765-81a0-62ad96dd167a`.

> [https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestParameters.](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestParameters.)

---

### Documentation <a name="Documentation" id="@softchef/cdk-apigateways.Documentation"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-apigateways.Documentation.Initializer"></a>

```typescript
import { Documentation } from '@softchef/cdk-apigateways'

const documentation: Documentation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-apigateways.Documentation.property.customPage">customPage</a></code> | <code><a href="#@softchef/cdk-apigateways.CustomPage">CustomPage</a></code> | Custom documentation page. |
| <code><a href="#@softchef/cdk-apigateways.Documentation.property.docsPrefix">docsPrefix</a></code> | <code>string</code> | Specify the documentation store prefix path. |
| <code><a href="#@softchef/cdk-apigateways.Documentation.property.file">file</a></code> | <code>string</code> | Specify the documentation definitions path. |
| <code><a href="#@softchef/cdk-apigateways.Documentation.property.pannelType">pannelType</a></code> | <code>string</code> | Specify pannel type, Supports:. |
| <code><a href="#@softchef/cdk-apigateways.Documentation.property.s3Bucket">s3Bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Specify the documentation bucket to store static web page. |

---

##### `customPage`<sup>Optional</sup> <a name="customPage" id="@softchef/cdk-apigateways.Documentation.property.customPage"></a>

```typescript
public readonly customPage: CustomPage;
```

- *Type:* <a href="#@softchef/cdk-apigateways.CustomPage">CustomPage</a>

Custom documentation page.

---

##### `docsPrefix`<sup>Optional</sup> <a name="docsPrefix" id="@softchef/cdk-apigateways.Documentation.property.docsPrefix"></a>

```typescript
public readonly docsPrefix: string;
```

- *Type:* string

Specify the documentation store prefix path.

---

##### `file`<sup>Optional</sup> <a name="file" id="@softchef/cdk-apigateways.Documentation.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Specify the documentation definitions path.

Support format: Swagger 2.0, OpenAPI 3.0, OpenAPI 3.1

---

##### `pannelType`<sup>Optional</sup> <a name="pannelType" id="@softchef/cdk-apigateways.Documentation.property.pannelType"></a>

```typescript
public readonly pannelType: string;
```

- *Type:* string
- *Default:* Redoc

Specify pannel type, Supports:.

Redoc: https://github.com/Redocly/redoc

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@softchef/cdk-apigateways.Documentation.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

Specify the documentation bucket to store static web page.

---

### OriginApiConfig <a name="OriginApiConfig" id="@softchef/cdk-apigateways.OriginApiConfig"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-apigateways.OriginApiConfig.Initializer"></a>

```typescript
import { OriginApiConfig } from '@softchef/cdk-apigateways'

const originApiConfig: OriginApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.originApi">originApi</a></code> | <code>aws-cdk-lib.aws_apigateway.RestApi \| @aws-cdk/aws-apigatewayv2-alpha.HttpApi \| @softchef/cdk-restapi.RestApi</code> | The origin api are supported AWS RestApi/HttpApi & @softchef/cdk-restapi. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.path">path</a></code> | <code>string</code> | The origin api path. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.allowedMethods">allowedMethods</a></code> | <code>aws-cdk-lib.aws_cloudfront.AllowedMethods</code> | HTTP methods to allow for this behavior. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.cachedMethods">cachedMethods</a></code> | <code>aws-cdk-lib.aws_cloudfront.CachedMethods</code> | HTTP methods to cache for this behavior. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.cachePolicy">cachePolicy</a></code> | <code>aws-cdk-lib.aws_cloudfront.ICachePolicy</code> | The cache policy for this behavior. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.compress">compress</a></code> | <code>boolean</code> | Whether you want CloudFront to automatically compress certain files for this cache behavior. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.originApiAuthorizationType">originApiAuthorizationType</a></code> | <code><a href="#@softchef/cdk-apigateways.OriginApiAuthorizationType">OriginApiAuthorizationType</a></code> | The origin api which authorization type. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.originRequestPolicy">originRequestPolicy</a></code> | <code>aws-cdk-lib.aws_cloudfront.IOriginRequestPolicy</code> | The origin request policy for this behavior. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.responseHeadersPolicy">responseHeadersPolicy</a></code> | <code>aws-cdk-lib.aws_cloudfront.IResponseHeadersPolicy</code> | The response headers policy for this behavior. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiConfig.property.viewerProtocolPolicy">viewerProtocolPolicy</a></code> | <code>aws-cdk-lib.aws_cloudfront.ViewerProtocolPolicy</code> | The protocol that viewers can use to access the files controlled by this behavior. |

---

##### `originApi`<sup>Required</sup> <a name="originApi" id="@softchef/cdk-apigateways.OriginApiConfig.property.originApi"></a>

```typescript
public readonly originApi: RestApi | HttpApi | RestApi;
```

- *Type:* aws-cdk-lib.aws_apigateway.RestApi | @aws-cdk/aws-apigatewayv2-alpha.HttpApi | @softchef/cdk-restapi.RestApi

The origin api are supported AWS RestApi/HttpApi & @softchef/cdk-restapi.

---

##### `path`<sup>Required</sup> <a name="path" id="@softchef/cdk-apigateways.OriginApiConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The origin api path.

Ex: https://{ApiId}.execute-api.{region}.amazonaws.com/{StageName}/articles, the path is articles.

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@softchef/cdk-apigateways.OriginApiConfig.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: AllowedMethods;
```

- *Type:* aws-cdk-lib.aws_cloudfront.AllowedMethods
- *Default:* AllowedMethods.ALLOW_GET_HEAD

HTTP methods to allow for this behavior.

---

##### `cachedMethods`<sup>Optional</sup> <a name="cachedMethods" id="@softchef/cdk-apigateways.OriginApiConfig.property.cachedMethods"></a>

```typescript
public readonly cachedMethods: CachedMethods;
```

- *Type:* aws-cdk-lib.aws_cloudfront.CachedMethods
- *Default:* CachedMethods.CACHE_GET_HEAD

HTTP methods to cache for this behavior.

---

##### `cachePolicy`<sup>Optional</sup> <a name="cachePolicy" id="@softchef/cdk-apigateways.OriginApiConfig.property.cachePolicy"></a>

```typescript
public readonly cachePolicy: ICachePolicy;
```

- *Type:* aws-cdk-lib.aws_cloudfront.ICachePolicy
- *Default:* CachePolicy.CACHING_OPTIMIZED

The cache policy for this behavior.

The cache policy determines what values are included in the cache key,
and the time-to-live (TTL) values for the cache.

> [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html.](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html.)

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@softchef/cdk-apigateways.OriginApiConfig.property.compress"></a>

```typescript
public readonly compress: boolean;
```

- *Type:* boolean
- *Default:* true

Whether you want CloudFront to automatically compress certain files for this cache behavior.

See https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#compressed-content-cloudfront-file-types
for file types CloudFront will compress.

---

##### `originApiAuthorizationType`<sup>Optional</sup> <a name="originApiAuthorizationType" id="@softchef/cdk-apigateways.OriginApiConfig.property.originApiAuthorizationType"></a>

```typescript
public readonly originApiAuthorizationType: OriginApiAuthorizationType;
```

- *Type:* <a href="#@softchef/cdk-apigateways.OriginApiAuthorizationType">OriginApiAuthorizationType</a>
- *Default:* none

The origin api which authorization type.

---

##### `originRequestPolicy`<sup>Optional</sup> <a name="originRequestPolicy" id="@softchef/cdk-apigateways.OriginApiConfig.property.originRequestPolicy"></a>

```typescript
public readonly originRequestPolicy: IOriginRequestPolicy;
```

- *Type:* aws-cdk-lib.aws_cloudfront.IOriginRequestPolicy
- *Default:* none

The origin request policy for this behavior.

The origin request policy determines which values (e.g., headers, cookies)
are included in requests that CloudFront sends to the origin.

---

##### `responseHeadersPolicy`<sup>Optional</sup> <a name="responseHeadersPolicy" id="@softchef/cdk-apigateways.OriginApiConfig.property.responseHeadersPolicy"></a>

```typescript
public readonly responseHeadersPolicy: IResponseHeadersPolicy;
```

- *Type:* aws-cdk-lib.aws_cloudfront.IResponseHeadersPolicy
- *Default:* none

The response headers policy for this behavior.

The response headers policy determines which headers are included in responses

---

##### `viewerProtocolPolicy`<sup>Optional</sup> <a name="viewerProtocolPolicy" id="@softchef/cdk-apigateways.OriginApiConfig.property.viewerProtocolPolicy"></a>

```typescript
public readonly viewerProtocolPolicy: ViewerProtocolPolicy;
```

- *Type:* aws-cdk-lib.aws_cloudfront.ViewerProtocolPolicy
- *Default:* ViewerProtocolPolicy.ALLOW_ALL

The protocol that viewers can use to access the files controlled by this behavior.

---



## Enums <a name="Enums" id="Enums"></a>

### OriginApiAuthorizationType <a name="OriginApiAuthorizationType" id="@softchef/cdk-apigateways.OriginApiAuthorizationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@softchef/cdk-apigateways.OriginApiAuthorizationType.NONE">NONE</a></code> | Open access. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiAuthorizationType.IAM">IAM</a></code> | Use AWS IAM permissions. |
| <code><a href="#@softchef/cdk-apigateways.OriginApiAuthorizationType.COGNITO">COGNITO</a></code> | Use an AWS Cognito user pool. |

---

##### `NONE` <a name="NONE" id="@softchef/cdk-apigateways.OriginApiAuthorizationType.NONE"></a>

Open access.

---


##### `IAM` <a name="IAM" id="@softchef/cdk-apigateways.OriginApiAuthorizationType.IAM"></a>

Use AWS IAM permissions.

---


##### `COGNITO` <a name="COGNITO" id="@softchef/cdk-apigateways.OriginApiAuthorizationType.COGNITO"></a>

Use an AWS Cognito user pool.

---

