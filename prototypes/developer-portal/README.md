# @galaxyops/developer-portal

The Developer Portal service makes it easy to test multiple deployed service
endpoints. The service is not designed to work against local service endpoints
because that would involve starting n+1 services. It only works for deployed
services.

## TODO

Have deploy services upload their openapispec to a S3 bucket. Get spec from S3.
Combine specs. Deploy a redoc like instance. Add authentication or api token as
needed.

## References

- [Redoc](https://redocly.com/customers/australia-post/)
- [Redoc Locally](https://redocly.com/docs/redoc/deployment/intro/#how-to-run-redoc-locally)
