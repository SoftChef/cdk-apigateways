import {
  IBucket,
} from 'aws-cdk-lib/aws-s3';

export interface CustomPage {
  /**
   * Specify page title to static page.
   */
  readonly pageTitle?: string;
  /**
   * Specify css styles to embedded to static page.
   */
  readonly cssStyles?: string;
}

export interface Documentation {
  /**
   * Specify the documentation bucket to store static web page.
   */
  readonly s3Bucket?: IBucket;
  /**
   * Specify the documentation store prefix path.
   */
  readonly docsPrefix?: string;
  /**
   * Specify the documentation definitions path.
   * Support format: Swagger 2.0, OpenAPI 3.0, OpenAPI 3.1
   */
  readonly file?: string;
  /**
   * Custom documentation page.
   */
  readonly customPage?: CustomPage;
  /**
   * Specify pannel type, Supports:
   *
   * Redoc: https://github.com/Redocly/redoc
   *
   * @default - Redoc
   */
  readonly pannelType?: 'Redoc';
}