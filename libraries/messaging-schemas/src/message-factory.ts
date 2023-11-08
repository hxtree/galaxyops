import { ClassConstructor, plainToInstance } from 'class-transformer';
import { v4 } from 'uuid';

export class MessageFactory {
  public static create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
  ): Promise<T> {
    return new MessageFactory().create(constructor, partial);
  }

  public async create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
  ): Promise<T> {
    const now = new Date();
    const auto = {
      messageId: v4(),
      timestamp: now.toISOString(),
    };
    const objectInstance = plainToInstance(constructor, {
      ...partial,
      ...auto,
    });

    return objectInstance as T;
  }
}
