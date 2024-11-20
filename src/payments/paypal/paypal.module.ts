import { Module } from '@nestjs/common';
import { PaypalController } from './paypal.controller';
import { PaypalService } from './paypal.service';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PaypalController],
  providers: [PaypalService],
})
export class PaypalModule {}
