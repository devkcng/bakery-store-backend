import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderProductToppingDto } from './create-order-product-topping.dto';

export class UpdateOrderProductToppingDto extends PartialType(
  CreateOrderProductToppingDto,
) {}
