import { IsString, IsInt, IsOptional, IsEnum } from 'class-validator';
import { ShippingStatus } from '@prisma/client';

export class CreateShippingInfoDto {
  @IsString({ message: 'recipient_name must be a string' })
  recipient_name: string;

  @IsString({ message: 'street_address must be a string' })
  street_address: string;

  @IsString({ message: 'district must be a string' })
  district: string;

  @IsString({ message: 'ward must be a string' })
  ward: string;

  @IsString({ message: 'phone_number must be a string' })
  phone_number: string;

  @IsOptional()
  @IsString({ message: 'notes must be a string' })
  notes?: string;

  @IsInt({ message: 'order_id must be an integer' })
  order_id: number;

  @IsEnum(ShippingStatus, {
    message:
      'shipping_status must be either DELIVERED, IN_TRANSIT, or RETURNED',
  })
  shipping_status: ShippingStatus;
}
``;
