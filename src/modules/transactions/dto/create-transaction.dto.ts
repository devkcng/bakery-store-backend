import { PaymentMethod, PaymentStatus } from '@prisma/client';

export class CreateTransactionDto {
  payment_method: PaymentMethod;
  status: PaymentStatus;
  amount: number;
  order_id: number;
}
