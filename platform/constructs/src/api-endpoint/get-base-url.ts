export function getBaseUrl(
  apiId: string,
  region: string,
  stageName: string,
): string {
  return `https://${apiId}.execute-api.${region}.amazonaws.com/${stageName}/v1`;
}
