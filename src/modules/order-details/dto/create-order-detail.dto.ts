import { IsInt, IsOptional } from 'class-validator';

export class CreateOrderDetailDto {
  @IsInt({ message: 'order_id must be an integer' })
  order_id: number;

  @IsOptional()
  @IsInt({ message: 'product_id must be an integer' })
  product_id?: number;

  @IsInt({ message: 'product_quantity must be an integer' })
  product_quantity: number;
}
