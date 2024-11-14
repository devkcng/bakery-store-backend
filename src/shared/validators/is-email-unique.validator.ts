import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { PrismaService } from '@/modules/prisma/prisma.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(email: string, args: ValidationArguments) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return !user; // return true if email is not found, false otherwise
  }

  defaultMessage(args: ValidationArguments) {
    return 'Email $value already exists. Choose another email.';
  }
}
