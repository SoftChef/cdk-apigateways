import {
  HttpApi,
} from '@aws-cdk/aws-apigatewayv2-alpha';
import {
  RestApi as SoftChefRestApi,
} from '@softchef/cdk-restapi';
import {
  RestApi,
} from 'aws-cdk-lib/aws-apigateway';

export interface OriginApiConfig {
  /**
   * The origin api are supported AWS RestApi/HttpApi & @softchef/cdk-restapi
   */
  readonly originApi: RestApi | HttpApi | SoftChefRestApi;
}