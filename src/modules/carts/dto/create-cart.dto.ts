import { IsInt, IsEnum } from 'class-validator';
import { CartStatus } from '@prisma/client';

export class CreateCartDto {
  @IsInt({ message: 'user_id must be an integer' })
  user_id: number;

  @IsEnum(CartStatus, {
    message: 'status must be either ACTIVE, ORDERED, or ABANDONED',
  })
  status?: CartStatus;
}
