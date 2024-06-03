import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {
  find(id: string): any {
    return { id };
  }

  list(): any {
    return [];
  }

  findByKey(key: string): any {
    return { key };
  }
}
