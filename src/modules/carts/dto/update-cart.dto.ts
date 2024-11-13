import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';
import { CartStatus } from '@prisma/client';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  status?: CartStatus;
}
