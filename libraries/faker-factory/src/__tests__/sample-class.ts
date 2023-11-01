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
  Length,
  IsInstance,
  ValidateNested,
  IsOptional,
  Type,
  IsLongitude,
} from '@cats-cradle/validation-schemas';

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

  @IsEmail()
  public email: string;

  @IsFQDN()
  public site: string;

  @IsLongitude()
  public longitude: string;

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
}
