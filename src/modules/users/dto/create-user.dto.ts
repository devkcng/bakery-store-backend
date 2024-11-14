import { IsEmail, IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { Role } from '@prisma/client';
import { IsEmailUnique } from '@/shared/validators/is-email-unique.decorator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsEmailUnique({ message: 'Email already exists. Choose another email.' })
  email: string;

  @IsOptional()
  @IsString({ message: 'Phone must be a string' })
  phone?: string;

  @IsOptional()
  @IsString({ message: 'Address must be a string' })
  address?: string;

  @IsOptional()
  @IsString({ message: 'Image must be a string' })
  image?: string;

  @IsNotEmpty({ message: 'Role is required' })
  @IsString({ message: 'Role must be a string' })
  role: Role;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  password: string;
}
