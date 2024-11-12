import { ShippingStatus } from '@prisma/client';

export class CreateShippingInfoDto {
  recipient_name: string;
  street_address: string;
  district: string;
  ward: string;
  phone_number: string;
  notes?: string;
  order_id: number;
  shipping_status: ShippingStatus;
}
