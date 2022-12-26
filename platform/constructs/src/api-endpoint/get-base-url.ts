export function getBaseUrl(
  apiId: string,
  region: string,
  stageName: string,
  path?: string,
): string {
  const url = `https://${apiId}.execute-api.${region}.amazonaws.com/${stageName}/v1`;

  if (path) {
    return `${url}/${path}`;
  }

  return url;
}
