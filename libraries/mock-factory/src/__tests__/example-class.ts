import {
  IsString,
  IsNumber,
  IsBoolean,
  IsUUID,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsCurrency,
} from 'class-validator';

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

  //   @Length(10, 20)
  //   title: string;

  //   @Contains('hello')
  //   text: string;

  //   @IsInt()
  //   @Min(0)
  //   @Max(10)
  //   rating: number;

  //   @IsDate()
  //   createDate: Date;
}
