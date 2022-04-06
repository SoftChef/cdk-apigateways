export enum OriginApiAuthorizationType {
  /**
   * Open access.
   */
  NONE = 'NONE',
  /**
   * Use AWS IAM permissions.
   */
  IAM = 'AWS_IAM',
  /**
   * Use an AWS Cognito user pool.
   */
  COGNITO = 'COGNITO_USER_POOLS',
}