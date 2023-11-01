// supported custom
export {
  DICE_NOTATION_REGEX,
  IsDiceNotation,
  IsDiceNotationValidator,
} from './custom/is-dice-notation';
export { IsMoney, IsMoneyValidator } from './custom/is-money';
export { IsUuidV4, IsUuidV4Validator } from './custom/is-uuidv4';
export { IsFilename, IsFilenameValidator } from './custom/is-filename';

// supported class-validator export
export {
  validateSync,
  ValidationError,
  ValidateNested,
  IsBoolean,
  IsISO8601,
  IsOptional,
  Equals,
  NotEquals,
  IsEmpty,
  IsUUID,
  // IsNotEmpty.
  IsIn,
  IsNotIn,
  IsString,
  IsNumber,
  IsInt,
  IsArray,
  IsEnum,
  IsPositive,
  IsNegative,
  Min,
  Max,
  MinDate,
  MaxDate,
  IsBooleanString,
  IsDateString,
  // IsNumberString,
  Contains,
  NotContains,
  IsAlpha,
  IsAlphanumeric,
  IsDecimal,
  IsCreditCard,
  IsEmail,
  IsFQDN,
  IsHexColor,
  IsPostalCode,
  IsIP,
  IsJSON,
  IsObject,
  IsLowercase,
  IsMongoId,
  IsNumberString,
  IsUrl,
  IsUppercase,
  Length,
  MinLength,
  MaxLength,
  Matches,
  IsHash,
  // IsStrongPassword,
  ArrayContains,
  ArrayNotContains,
  ArrayNotEmpty,
  ArrayMinSize,
  ArrayMaxSize,
  ArrayUnique,
  IsInstance,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

// work around for validating nested types
// https://stackoverflow.com/questions/53786383/validate-nested-objects-using-class-validator-and-nestjs
export { Type } from 'class-transformer';
