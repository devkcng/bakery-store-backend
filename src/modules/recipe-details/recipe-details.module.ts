import { Module } from '@nestjs/common';
import { RecipeDetailsService } from './recipe-details.service';
import { RecipeDetailsController } from './recipe-details.controller';
import { PrismaModule } from '@/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RecipeDetailsController],
  providers: [RecipeDetailsService],
})
export class RecipeDetailsModule {}
