import { IsString, IsNumber } from 'class-validator';

export class CreateWarehouseDto {
  @IsString({ message: 'name must be a string' })
  name: string;

  @IsNumber({}, { message: 'quantity must be a number' })
  quantity: number;

  @IsString({ message: 'unit must be a string' })
  unit: string;
}
