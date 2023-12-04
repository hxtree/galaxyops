import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../mongoose/base.repository';
import { TStudentDocument, Student } from './student.schema';

@Injectable()
export class StudentRepository extends BaseRepository<TStudentDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(Student.name) private entity: Model<TStudentDocument>,
  ) {
    super(entity);
  }
}
