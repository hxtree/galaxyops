export enum CodeSnippetLanguages {
  JSON = 'json',
  HTML = 'html',
  CSS = 'css',
  JAVASCRIPT = 'javascript',
}

export type CodeSnippetProps = {
  data: string;
  language: CodeSnippetLanguages;
};
