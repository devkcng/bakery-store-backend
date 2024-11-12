export class CreateProductDto {
  name: string;
  price: number;
  description?: string;
  category_id?: number;
  img_path?: string;
  max_daily_quantity_limit?: number;
  product_capacity_per_batch?: number;
}
