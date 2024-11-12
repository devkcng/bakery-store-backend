import { Module } from '@nestjs/common';
import { OvensService } from './ovens.service';
import { OvensController } from './ovens.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OvensController],
  providers: [OvensService],
})
export class OvensModule {}
