import { IsEnum, IsNumber } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class CreateOrderDto {
  @IsNumber({}, { message: 'total_amount must be a number' })
  total_amount: number;

  @IsEnum(OrderStatus, {
    message:
      'order_status must be either COMPLETED, PENDING, PROCESSING, CANCELED, or DELIVERED',
  })
  order_status: OrderStatus;
}
