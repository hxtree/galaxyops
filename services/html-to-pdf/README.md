# @org-apis/html-to-pdf

HTMLtoPDF is a service for generating PDFs from HTML. HTML can be rendered from
request containing either HTML or URL.

## How it Works

PDF are generated using a headless version of Chromium. The PDF rendered feature
text recognition, images, hyperlinks, print media queries, table breaks, etc.
All with relatively little code.

## TODO

- [] Get working when deployed with lambda, must have deploy a layer containing
  Chrome.

## References

- [Generating PDF AWS Lambda](https://wavelop.com/en/story/generate-pdf-with-aws-lambda/)
- [Puppeteer Layers](https://github.com/RafalWilinski/serverless-puppeteer-layers/tree/master/layer)
