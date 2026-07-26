import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(\+8801|01)[3-9]\d{8}$/, {
    message: 'Phone number must be a valid Bangladeshi phone number',
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}