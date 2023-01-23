import {
  IsString,
  IsNumber,
  IsBoolean,
  IsUUID,
  IsEnum,
  Contains,
  IsInt,
  Max,
  Min,
  IsEmail,
  IsFQDN,
  IsDate,
  Length,
  IsCurrency,
  IsInstance,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ExampleChildClass } from './example-child-class';

export enum ExampleEnum {
  RED = 'red',
  YELLOw = 'yellow',
  BLUE = 'blue',
}

export class ExampleClass {
  @IsBoolean()
  public boolean: boolean;

  @IsNumber()
  public number: number;

  @IsString()
  public string: string;

  @IsUUID()
  public uuid: string;

  @IsCurrency()
  public currency: string;

  @IsEmail()
  public email: string;

  @IsFQDN()
  public site: string;

  @IsDate()
  public date: Date;

  @IsString()
  @Length(1, 10)
  public min: string;

  @IsEnum(ExampleEnum)
  public enum: ExampleEnum;

  @IsInt()
  @Min(0)
  @Max(10)
  public rating: number;

  @Contains('needle')
  public haystack: string;

  // @IsInstance(value: any)
  // @ValidateNested()
  // @IsInstance(ExampleChildClass)
  // public exampleChildClass: ExampleChildClass;
  // @Type(() => ExampleChildClass)

  // @IsDiceNotation()
  // public diceNotation: string;

  //   @IsDate()
  //   createDate: Date;
}
