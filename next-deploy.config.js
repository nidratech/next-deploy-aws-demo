// for more configurable options see: https://github.com/nidratech/next-deploy#configuration-options
module.exports = {
  engine: 'aws',
  debug: true,
  bucketName: 'next-deploy-demo-bucket',
  description: {
    requestLambda: 'Next deploy demo request lambda.',
  },
  name: {
    requestLambda: 'request-handler-demo',
  },
  stage: {
    name: 'demo',
    versioned: true,
    bucketName: 'next-deploy-demo-environments',
  },
};
