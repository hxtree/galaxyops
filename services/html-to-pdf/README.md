# @org-apis/html-to-pdf

HTMLtoPDF is a service for generating PDFs from HTML. It support generating a
PDF from either a request containing a HTML body or a URL.

## How it Works

PDF are generated using a headless version of Chromium. This form of PDF
rendering supports text recognition, images, hyperlinks, print media queries,
table breaks, and other features all this with relatively little code
maintenance.

## TODO

- [] Get working when deployed with lambda, which requires deploy a layer
  containing Chrome.

## References

- [Generating PDF AWS Lambda](https://wavelop.com/en/story/generate-pdf-with-aws-lambda/)
- [Puppeteer Layers](https://github.com/RafalWilinski/serverless-puppeteer-layers/tree/master/layer)
