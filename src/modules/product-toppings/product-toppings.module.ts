import { Module } from '@nestjs/common';
import { ProductToppingsService } from './product-toppings.service';
import { ProductToppingsController } from './product-toppings.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductToppingsController],
  providers: [ProductToppingsService],
})
export class ProductToppingsModule {}
