import { IsInt, IsEnum, IsOptional } from 'class-validator';
import { ProcessingStatus } from '@prisma/client';

export class CreateOrderDetailProcessDto {
  @IsOptional()
  @IsInt({ message: 'oven_id must be an integer' })
  oven_id?: number;

  @IsInt({ message: 'order_detail_id must be an integer' })
  order_detail_id: number;

  @IsEnum(ProcessingStatus, {
    message:
      'processing_status must be either WAITING, IN_PROGRESS, or COMPLETED',
  })
  processing_status: ProcessingStatus;

  @IsInt({ message: 'order_quantity must be an integer' })
  order_quantity: number;

  @IsInt({ message: 'processing_quantity must be an integer' })
  processing_quantity: number;

  @IsInt({ message: 'processed_quantity must be an integer' })
  processed_quantity: number;
}
