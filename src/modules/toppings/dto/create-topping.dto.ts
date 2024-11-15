import { IsString, IsNumber } from 'class-validator';

export class CreateToppingDto {
  @IsString({ message: 'name must be a string' })
  name: string;

  @IsNumber({}, { message: 'price must be a number' })
  price: number;
}
