import { CartStatus } from '@prisma/client';

export class CreateCartDto {
  user_id: number;
  status?: CartStatus;
}
