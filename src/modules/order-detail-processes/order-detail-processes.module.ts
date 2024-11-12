import { Module } from '@nestjs/common';
import { OrderDetailProcessesService } from './order-detail-processes.service';
import { OrderDetailProcessesController } from './order-detail-processes.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OrderDetailProcessesController],
  providers: [OrderDetailProcessesService],
})
export class OrderDetailProcessesModule {}
