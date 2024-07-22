import { Module } from '@nestjs/common';
import { MongooseModule } from '@galaxyops/nestjs-modules';
import { InstanceController } from './instance.controller';
import { InstanceRepository } from '../../models/instance.repository';
import { databaseModule } from '../../database.module';
import { InstanceSchema } from '../../models/instance.schema';

@Module({
  imports: [
    databaseModule(),
    MongooseModule.forFeature([{ name: 'Instance', schema: InstanceSchema }]),
  ],
  controllers: [InstanceController],
  providers: [InstanceRepository],
})
export class InstanceModule {}
