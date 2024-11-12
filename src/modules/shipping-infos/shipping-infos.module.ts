import { Module } from '@nestjs/common';
import { ShippingInfosService } from './shipping-infos.service';
import { ShippingInfosController } from './shipping-infos.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ShippingInfosController],
  providers: [ShippingInfosService],
})
export class ShippingInfosModule {}
