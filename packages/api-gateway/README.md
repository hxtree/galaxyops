# @org-package/api-gateway

![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Lifecycle](https://img.shields.io/badge/lifecycle-stable-brightgreen)

This service brings up bare bone API Gateway Rest APIs, Stages, and Deployments.
Other services then use these to resources via Platform Constructs to trigger
new deployments. This allows multiple stacks to deploy resources to the same API
Gateway. It's kind of similar to a Kong API Gateway AWS Lambda but straight CDK.

- Less costly sandbox/developer environments than using AWS ACM Certificate
  approach, which is ~$500/month.
- Avoids interservice DNS TTL caching issues.
- Easier coordination between multiple microservices as they can share the same
  host.
- Simplifies maintenance of different (mobile, phone, web, etc) backend for
  frontend.

## Stacks

- ApiGateway

## Documentation

- [Architecting Multiple Microservices Behind Single Domain](https://aws.amazon.com/blogs/compute/architecting-multiple-microservices-behind-a-single-domain-with-amazon-api-gateway/)
- [Crossstack References](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html)
