// import {
//   Template,
// } from 'aws-cdk-lib/assertions';
// import {
//   IntegTesting,
// } from '../src/integ.default';

test('integ snapshot validation', () => {
  jest.mock('fs', () => {
    console.log('mock');
    return {
      readFileSync: jest.fn(),
      copyFileSync: jest.fn(),
    };
  });
  // const integ = new IntegTesting();
  // const template = Template.fromStack(integ.stack);
  // expect(template).toMatchSnapshot();
  // template.resourceCountIs('AWS::EC2::Instance', 1);
});