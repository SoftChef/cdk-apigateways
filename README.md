# AWS CDK with API Gateway(s) & CloudFront(CDN)

[![npm version](https://badge.fury.io/js/%40softchef%2Fcdk-apigateways.svg)](https://badge.fury.io/js/%40softchef%2Fcdk-restapi)
![Release](https://github.com/SoftChef/cdk-apigateways/workflows/Release/badge.svg)
![npm](https://img.shields.io/npm/dt/@softchef/cdk-apigateways?label=NPM%20Downloads&color=orange)

`cdk-apigateways` is an AWS CDK construct. It's help to mix multiple `RestApi` or `HttpApi` (API Gateway) or `RestApi` [(@softchef/cdk-restapi)](https://github.com/SoftChef/cdk-restapi) to the same CloudFront distribution. If you have provide the `Swagger 2.0` / `Open API 3.0` / `Open API 3.1` definitions file, it will generate documentation website in the same distribution.

## Installation

### NPM
```
npm install @softchef/cdk-apigateways
```

### Yarn
```
yarn add @softchef/cdk-apigateways
```

## Example

```
const apis = new ApiGateways(this, 'ApiGateways', {
  stageName: 'prod',
  originApisConfig: {
    books: {
      originApi: booksApi,
    },
    articles: {
      originApi: articlesApi,
    },
  },
  distribution: {
    comment: 'ApiGateways',
  },
  documentation: {
    s3Bucket: docBucket,
    file: './docs/swagger.yaml',
  },
});
```

## Todo List
- Add architecture diagram
- Add about Redoc

## License
This code is licensed under the Apache License 2.0. See the [LICENSE](https://github.com/SoftChef/cdk-apigateways/blob/main/LICENSE) file.