import { OrderStatus } from '@prisma/client';

export class CreateOrderDto {
  total_amount: number;
  order_status: OrderStatus;
}
