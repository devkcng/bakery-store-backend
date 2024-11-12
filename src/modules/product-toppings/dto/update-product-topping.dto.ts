import { PartialType } from '@nestjs/mapped-types';
import { CreateProductToppingDto } from './create-product-topping.dto';

export class UpdateProductToppingDto extends PartialType(
  CreateProductToppingDto,
) {}
