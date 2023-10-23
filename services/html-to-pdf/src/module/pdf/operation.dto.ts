import {
  IsUrl,
  IsEnum,
  IsString,
  IsOptional,
  IsFilename,
} from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

export enum OperationInput {
  HTML = 'HTML',
  URL = 'URL',
}

export enum OperationOutput {
  DATA = 'DATA',
  PDF = 'PDF',
  JSON = 'JSON',
}

export class OperationDto {
  @IsEnum(OperationInput)
  @ApiProperty({
    description: 'input format',
    default: OperationInput.HTML,
    enum: OperationOutput,
  })
    input: OperationInput;

  @IsEnum(OperationOutput)
  @ApiProperty({
    description: 'output format',
    default: OperationOutput.PDF,
    enum: OperationOutput,
  })
    output: OperationOutput;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    description: 'url',
    default: 'https://google.com',
    type: String,
  })
    url?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'HTML',
    default:
      '<!doctype><html><head><title>Example</title></head><body>Hello, World</body></html>',
    type: String,
  })
    content?: string;

  @IsFilename()
  @ApiProperty({
    description: 'Filename',
    default: `${v4()}.pdf`,
    type: String,
  })
    filename?: string;
}
