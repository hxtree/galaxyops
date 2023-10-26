import fs from 'fs';

export const writeJsonFile = (
  path: string,
  content: Object,
  prettyFormat: boolean = true,
): void => {
  const jsonAsString = prettyFormat
    ? JSON.stringify(content, null, 2)
    : JSON.stringify(content);

  fs.writeFileSync(path, jsonAsString);
};
