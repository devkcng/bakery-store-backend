import { IsInt, Min } from 'class-validator';

export class CreateCartItemDto {
  @IsInt({ message: 'cart_id must be an integer' })
  cart_id: number;

  @IsInt({ message: 'product_id must be an integer' })
  product_id: number;

  @IsInt({ message: 'quantity must be an integer' })
  @Min(1, { message: 'quantity must be at least 1' })
  quantity: number;
}
