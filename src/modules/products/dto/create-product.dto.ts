import { IsString, IsNumber, IsOptional, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'name must be a string' })
  name: string;

  @IsNumber({}, { message: 'price must be a number' })
  price: number;

  @IsOptional()
  @IsString({ message: 'description must be a string' })
  description?: string;

  @IsOptional()
  @IsInt({ message: 'category_id must be an integer' })
  category_id?: number;

  @IsOptional()
  @IsString({ message: 'img_path must be a string' })
  img_path?: string;

  @IsOptional()
  @IsInt({ message: 'max_daily_quantity_limit must be an integer' })
  max_daily_quantity_limit?: number;

  @IsOptional()
  @IsInt({ message: 'product_capacity_per_batch must be an integer' })
  product_capacity_per_batch?: number;
}
