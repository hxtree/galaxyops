import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { IsString, IsUuidV4 } from '@galaxyops/validation-schemas';
import { BaseEntity, BaseEntityProps } from '../../mongoose';
import { Person } from './person.schema';

@Schema()
export class Student extends BaseEntity {
  @IsUuidV4()
  @Prop({
    type: MongooseSchema.Types.UUID,
    ref: 'Person',
  })
  public person: MongooseSchema.Types.UUID | Person;

  @IsString()
  @Prop()
  public studentNo!: string;

  constructor(partial: NonNullable<Omit<Student, BaseEntityProps>>) {
    super();
    Object.assign(this, partial);
  }
}

export type TStudentDocument = Student & Document;

export const StudentSchema = SchemaFactory.createForClass(Student);
