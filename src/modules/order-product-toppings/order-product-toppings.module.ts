import { Module } from '@nestjs/common';
import { OrderProductToppingsService } from './order-product-toppings.service';
import { OrderProductToppingsController } from './order-product-toppings.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OrderProductToppingsController],
  providers: [OrderProductToppingsService],
})
export class OrderProductToppingsModule {}
