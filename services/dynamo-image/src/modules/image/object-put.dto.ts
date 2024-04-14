export class ObjectPutDto {
  bucket: string;

  key: string;

  size: string;

  url: string;

  metadata: { [key: string]: string };
}
