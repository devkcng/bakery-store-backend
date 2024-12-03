import { IsInt } from 'class-validator';

export class CreateProductToppingDto {
  @IsInt({ message: 'product_id must be an integer' })
  product_id: number;

  @IsInt({ message: 'topping_id must be an integer' })
  topping_id: number;
}
