import { IsEnum, IsNumber, IsInt } from 'class-validator';
import { PaymentMethod, PaymentStatus } from '@prisma/client';

export class CreateTransactionDto {
  @IsEnum(PaymentMethod, {
    message: 'payment_method must be either BANK_TRANSFER or E_WALLET',
  })
  payment_method: PaymentMethod;

  @IsEnum(PaymentStatus, {
    message: 'status must be either PENDING, SUCCESS, or FAILED',
  })
  status: PaymentStatus;

  @IsNumber({}, { message: 'amount must be a number' })
  amount: number;

  @IsInt({ message: 'order_id must be an integer' })
  order_id: number;
}
