import {
  IsString,
  // IsNumber,
  // IsBoolean,
  // IsUUID,
  // Contains,
  // IsInt,
  // Length,
  // IsEmail,
  // IsFQDN,
  // IsDate,
  // Min,
  // Max,
  // IsCurrency,
} from 'class-validator';

export class ExampleChildClass {
  @IsString()
  public string: string;
}
