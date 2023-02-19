import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, IsInt } from '@cats-cradle/validation-schemas';

@Schema()
export class DisciplineEmbeddable {
  @IsString()
  @Prop()
  public name!: string;

  @IsInt()
  @Prop()
  public experience!: number;

  public constructor(name: string, experience: number = 0) {
    this.name = name;
    this.experience = experience;
  }

  public get level(): number {
    return Math.floor(Math.sqrt(this.experience / 100));
  }

  public get nextLevel(): number {
    return this.experience - ((this.level * (this.level - 1)) / 2) * 100;
  }

  public get experienceToNextLevel(): number {
    return this.nextLevel - this.experience;
  }

  public get experienceToNextLevelPercentage(): number {
    return this.experienceToNextLevel / this.nextLevel;
  }

  public get effects(): Array<string> {
    return [];
  }
}
