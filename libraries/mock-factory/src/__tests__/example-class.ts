import {
  IsString,
  IsNumber,
  IsBoolean,
  IsUUID,
  // Contains,
  // IsInt,
  // Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Length,
  IsCurrency,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ExampleChildClass } from './example-child-class';

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

  // @IsDiceNotation()
  // public diceNotation: string;

  //   title: string;

  //   @Contains('hello')
  //   text: string;

  //   @IsInt()
  //   @Min(0)
  //   @Max(10)
  //   rating: number;

  //   @IsDate()
  //   createDate: Date;

  // @ValidateNested()
  // @Type(() => ExampleChildClass)
  // exampleChildClass: ExampleChildClass;
}
