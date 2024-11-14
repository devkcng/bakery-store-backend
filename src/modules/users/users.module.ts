import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { SharedModule } from '@/shared/shared.module';

@Module({
  imports: [PrismaModule, SharedModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
