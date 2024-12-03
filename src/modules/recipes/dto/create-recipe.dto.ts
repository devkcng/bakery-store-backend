import { IsString, IsInt } from 'class-validator';

export class CreateRecipeDto {
  @IsString({ message: 'name must be a string' })
  name: string;

  @IsInt({ message: 'product_id must be an integer' })
  product_id: number;

  @IsInt({ message: 'complete_time must be an integer' })
  complete_time: number;
}
