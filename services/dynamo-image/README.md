# @cats-cradle/dynamo-image

![Lifecycle](https://img.shields.io/badge/lifecycle-unstable-red)

## Overview

This project is designed to automatically generate multiple image variants when
an original image is uploaded to an S3 bucket.

## How it Works

1. An event is triggered when an original image is uploaded (PUT) into the S3
   bucket.
2. A listener responds to this event and generates multiple image variants of
   specified sizes, provided the image is in a supported format.

Please note that while you can manually upload specific versions of image
variants, this will not trigger the automatic generation of other variants.

## References

This project is based on the following resources:

- [DynamoImage](https://github.com/Ouxsoft/DynamoImage)
- [AWS Lambda S3 Thumbnail Generator](https://github.com/hxtree/AWS-Lambda-S3-Thumbnail-Generator)
