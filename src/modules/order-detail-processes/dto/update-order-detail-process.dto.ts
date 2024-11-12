import { ProcessingStatus } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDetailProcessDto } from './create-order-detail-process.dto';

export class UpdateOrderDetailProcessDto extends PartialType(
  CreateOrderDetailProcessDto,
) {
  processing_status?: ProcessingStatus;
}
