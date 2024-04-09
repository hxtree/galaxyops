# @cats-cradle/dynamo-image

![Lifecycle](https://img.shields.io/badge/lifecycle-unstable-red)

When an original image is PUT into the S3 bucket an event is fired. A listener
generates multiple images of desired window sizes if image matches desired
format. Request can be made to upload a specifc version of other image variants
but it does not trigger generation of other variants.

Event

key: /original

## References

Based on [DynamoImage](https://github.com/Ouxsoft/DynamoImage) and
[AWS Lambda S3 Thumbnail Generator](https://github.com/hxtree/AWS-Lambda-S3-Thumbnail-Generator).
