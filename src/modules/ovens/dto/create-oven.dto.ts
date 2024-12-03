import { IsInt, IsEnum, IsOptional, IsString, IsDate } from 'class-validator';
import { OvenStatus } from '@prisma/client';

export class CreateOvenDto {
  @IsOptional()
  @IsInt({ message: 'oven_product_capacity_id must be an integer' })
  oven_product_capacity_id?: number;

  @IsEnum(OvenStatus, { message: 'status must be either AVAILABLE or IN_USE' })
  status: OvenStatus;

  @IsInt({ message: 'current_capacity_used must be an integer' })
  current_capacity_used: number;

  @IsOptional()
  @IsString({ message: 'current_baking_type must be a string' })
  current_baking_type?: string;

  @IsOptional()
  @IsDate({ message: 'start_time must be a valid date' })
  start_time?: Date;

  @IsOptional()
  @IsInt({ message: 'time_remaining must be an integer' })
  time_remaining?: number;
}
