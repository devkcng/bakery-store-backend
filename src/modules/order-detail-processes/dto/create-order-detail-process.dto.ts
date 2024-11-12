import { ProcessingStatus } from '@prisma/client';

export class CreateOrderDetailProcessDto {
  oven_id?: number;
  order_detail_id: number;
  processing_status: ProcessingStatus;
  order_quantity: number;
  processing_quantity: number;
  processed_quantity: number;
}
