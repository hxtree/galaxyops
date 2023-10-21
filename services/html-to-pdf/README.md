# @org-apis/html-to-pdf

HTMLtoPDF is a service for generating PDFs from HTML. It support generating a
PDF from either a request containing a HTML body or a URL.

## How it Works

PDF are generated using a headless version of Chromium. This form of PDF
rendering supports text recognition, images, hyperlinks, print media queries,
table breaks, and other features all this with relatively little code
maintenance.

It can be finicky to get working within a Lambda and API Gateway. Lambda doesn't
include fonts fonts. Chromium should be installed in a Lambda layer. API gateway
can cause blank PDF if it doesn't properly handle binary responses. Serverless
Express also has to be configured to support the binary mime type.

## References

- [Generating PDF AWS Lambda](https://wavelop.com/en/story/generate-pdf-with-aws-lambda/)
- [Puppeteer Layers](https://github.com/RafalWilinski/serverless-puppeteer-layers/tree/master/layer)
- [Binary Lambda Responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-payload-encodings-configure-with-console.html)
- [Serverless Express Binary](https://github.com/vendia/serverless-express/blob/master/examples/basic-starter/lambda.js)
