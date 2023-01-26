// eslint-disable-next-line max-classes-per-file
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
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum SampleEnum {
  RED = 'red',
  YELLOw = 'yellow',
  BLUE = 'blue',
}

export class SampleChildClass {
  @IsString()
  public string: string;
}

export class SamplePropertyClass {
  @IsString()
  public string: string;
}

export class SampleClass {
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

  @IsEnum(SampleEnum)
  public enum: SampleEnum;

  @IsInt()
  @Min(0)
  @Max(10)
  public rating: number;

  @Contains('needle')
  public haystack: string;

  @IsString()
  @IsOptional()
  public optional: string;

  @IsInstance(SampleChildClass)
  @Type(() => SampleChildClass)
  public childClass: SampleChildClass;

  @ValidateNested({ each: true })
  @Type(() => SampleChildClass)
  public nestedClass: SampleChildClass[];

  // @IsDiceNotation()
  // public diceNotation: string;
}
