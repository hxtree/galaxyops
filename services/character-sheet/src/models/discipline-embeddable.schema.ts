import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEnum, IsInt, Min, Max,
} from '@cats-cradle/validation-schemas';
import { DisciplineId, DisciplineIds } from '../data/discipline';

@Schema()
export class DisciplineEmbeddable {
  @IsEnum(DisciplineIds)
  @Prop({
    type: String,
    required: true,
    enum: DisciplineIds,
  })
  public disciplineId!: DisciplineId;

  @IsInt()
  @Min(0)
  @Max(255000)
  @Prop()
  public experience!: number;

  // public get nextLevel(): number {
  //   return this.experience - ((this.level * (this.level - 1)) / 2) * 100;
  // }

  // public get experienceToNextLevel(): number {
  //   return this.nextLevel - this.experience;
  // }

  // public get experienceToNextLevelPercentage(): number {
  //   return this.experienceToNextLevel / this.nextLevel;
  // }

  // public get effects(): Array<string> {
  //   return [];
  // }
}

// export const DisciplineEmbeddableSchema =
//   SchemaFactory.createForClass(DisciplineEmbeddable);

// DisciplineEmbeddableSchema.virtual('level').get(function () {
//   return Math.floor(Math.sqrt(this.experience / 100));
// });
