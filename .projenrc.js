const {
  awscdk,
  AUTOMATION_TOKEN,
} = require('projen');
const { NpmAccess } = require('projen/lib/javascript');

const PROJECT_NAME = '@softchef/cdk-apigateways';
const PROJECT_DESCRIPTION = 'This is a AWS CDK construct package. To mix multiple RestApi/HttpApi endpoints to CloudFront distribution(CDN). Also generate documentation page with your Swagger/OpenAPI definitions.';

/**
 * @todo
 * 1. Write README.md
 * 2. Test lib to node_modules
 * 3. Transform index.html
 * 4. Upload yaml to S3
 * 5. Write default yaml
 * 6. Publish
 */

const project = new awscdk.AwsCdkConstructLibrary({
  authorName: 'SoftChef',
  authorEmail: 'poke@softchef.com',
  authorUrl: 'https://www.softchef.com',
  authorOrganization: true,
  npmAccess: NpmAccess.PUBLIC,
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repositoryUrl: 'https://github.com/SoftChef/cdk-apigateways.git',
  cdkVersion: '2.1.0',
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  peerDeps: [
    '@aws-cdk/aws-apigatewayv2-alpha@2.1.0-alpha.0',
    '@softchef/cdk-restapi',
  ],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: AUTOMATION_TOKEN,
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['MinCheTsai'],
  },
  keywords: [
    'aws',
    'cdk',
    'apigateway',
    'cdn',
    'swagger',
    'openapi',
    'documentation',
  ],
});

const commonInclude = [
  'assets',
];

const commonExclude = [
  'cdk.out',
  'cdk.context.json',
  'yarn-error.log',
];


project.npmignore.include(...commonInclude);
project.npmignore.exclude(...commonExclude);
project.gitignore.exclude(...commonExclude);

project.package.addField('files', [
  '/lib',
  '/assets',
]);

project.synth();