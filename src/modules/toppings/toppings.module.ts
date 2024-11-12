import { Module } from '@nestjs/common';
import { ToppingsService } from './toppings.service';
import { ToppingsController } from './toppings.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ToppingsController],
  providers: [ToppingsService],
})
export class ToppingsModule {}
