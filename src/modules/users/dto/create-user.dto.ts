import { AccountType, Role } from '@prisma/client';

export class CreateUserDto {
  email: string;
  phone?: string;
  address?: string;
  image?: string;
  account_type?: AccountType;
  role?: Role;
  provider_account_id?: string;
  password?: string;
}
