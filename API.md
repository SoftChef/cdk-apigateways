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
| <code><a href="#@softchef/cdk-apigateways.ApiGatewaysProps.property.originApisConfig">originApisConfig</a></code> | <code>{[ key: string ]: <a href="#@softchef/cdk-apigateways.OriginApiConfig">OriginApiConfig</a>}</code> | Mix the APIs with specified behaviors. |
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
public readonly originApisConfig: {[ key: string ]: OriginApiConfig};
```

- *Type:* {[ key: string ]: <a href="#@softchef/cdk-apigateways.OriginApiConfig">OriginApiConfig</a>}

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

---

##### `originApi`<sup>Required</sup> <a name="originApi" id="@softchef/cdk-apigateways.OriginApiConfig.property.originApi"></a>

```typescript
public readonly originApi: RestApi | HttpApi | RestApi;
```

- *Type:* aws-cdk-lib.aws_apigateway.RestApi | @aws-cdk/aws-apigatewayv2-alpha.HttpApi | @softchef/cdk-restapi.RestApi

The origin api are supported AWS RestApi/HttpApi & @softchef/cdk-restapi.

---



