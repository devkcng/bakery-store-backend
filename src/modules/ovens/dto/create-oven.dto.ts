import { OvenStatus } from '@prisma/client';

export class CreateOvenDto {
  oven_product_capacity_id?: number;
  status: OvenStatus;
  current_capacity_used: number;
  current_baking_type?: string;
  start_time?: Date;
  time_remaining?: number;
}
