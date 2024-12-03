import { IsInt } from 'class-validator';

export class CreateOrderProductToppingDto {
  @IsInt({ message: 'order_detail_id must be an integer' })
  order_detail_id: number;

  @IsInt({ message: 'topping_id must be an integer' })
  topping_id: number;

  @IsInt({ message: 'quantity must be an integer' })
  quantity: number;
}
