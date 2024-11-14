import { Module } from '@nestjs/common';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { IsEmailUniqueConstraint } from './validators/is-email-unique.validator';

@Module({
  imports: [PrismaModule],
  providers: [IsEmailUniqueConstraint],
  exports: [IsEmailUniqueConstraint],
})
export class SharedModule {}
