import { IsInt, IsNumber } from 'class-validator';

export class CreateRecipeDetailDto {
  @IsInt({ message: 'warehouse_id must be an integer' })
  warehouse_id: number;

  @IsNumber({}, { message: 'quantity must be a number' })
  quantity: number;

  @IsInt({ message: 'recipe_id must be an integer' })
  recipe_id: number;
}
