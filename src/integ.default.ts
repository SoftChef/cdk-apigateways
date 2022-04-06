import {
  RestApi,
  HttpMethod,
} from '@softchef/cdk-restapi';
import {
  App,
  Stack,
} from 'aws-cdk-lib';
import {
  Function,
  InlineCode,
  Runtime,
} from 'aws-cdk-lib/aws-lambda';
import {
  Bucket,
} from 'aws-cdk-lib/aws-s3';
import {
  ApiGateways,
} from './apigateways';
import {
  OriginApiAuthorizationType,
} from './origin-api-authorization-type';

export class IntegTesting {

  public stack: Stack;

  constructor() {
    const app = new App();
    const stackName = app.node.tryGetContext('stackName') || 'ApiGatewaysStack';
    this.stack = new Stack(app, stackName, {
      env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT,
      },
    });
    const booksApi = this.createBookssRestApi();
    const articlesApi = this.createArticlesRestApi();
    const docBucket = this.createDocBucket();
    new ApiGateways(this.stack, 'ApiGateways', {
      stageName: 'prod',
      originApisConfig: [
        {
          path: 'books',
          originApi: booksApi,
          originApiAuthorizationType: OriginApiAuthorizationType.COGNITO,
        },
        {
          path: 'articles',
          originApi: articlesApi,
          originApiAuthorizationType: OriginApiAuthorizationType.IAM,
        },
      ],
      distribution: {
        comment: 'ApiGatewayMix',
      },
      documentation: {
        s3Bucket: docBucket,
        docsPrefix: 'docs',
        file: './assets/example.yaml',
      },
    });
  }

  private createBookssRestApi(): RestApi {
    return new RestApi(this.stack, 'BooksApi', {
      resources: [
        {
          path: '/books',
          httpMethod: HttpMethod.GET,
          lambdaFunction: new Function(this.stack, 'GetBooksFunction', {
            runtime: Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: new InlineCode('exports.handler = function(event, context, callback) { callback(null, { statusCode: 200, body: JSON.stringify({ books: [] }) }) }'),
          }),
        },
        {
          path: '/books/{bookId}',
          httpMethod: HttpMethod.GET,
          lambdaFunction: new Function(this.stack, 'GetBookFunction', {
            runtime: Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: new InlineCode('exports.handler = function(event, context, callback) { callback(null, { statusCode: 200, body: JSON.stringify({ book: { name: "Test Book" } }) }) }'),
          }),
        },
      ],
      enableCors: true,
    });
  }

  private createArticlesRestApi(): RestApi {
    return new RestApi(this.stack, 'ArticlesApi', {
      resources: [
        {
          path: '/articles',
          httpMethod: HttpMethod.GET,
          lambdaFunction: new Function(this.stack, 'GetArticlesFunction', {
            runtime: Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: new InlineCode('exports.handler = function(event, context, callback) { callback(null, { statusCode: 200, body: JSON.stringify({ articles: [] }) }) }'),
          }),
        },
      ],
      enableCors: true,
    });
  }

  private createDocBucket(): Bucket {
    return new Bucket(this.stack, 'DocBucket');
  }
}

new IntegTesting();