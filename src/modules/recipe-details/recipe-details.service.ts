import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateRecipeDetailDto } from './dto/create-recipe-detail.dto';
import { UpdateRecipeDetailDto } from './dto/update-recipe-detail.dto';

@Injectable()
export class RecipeDetailsService {
  constructor(private prisma: PrismaService) {}

  async create(createRecipeDetailDto: CreateRecipeDetailDto) {
    return this.prisma.recipeDetail.create({
      data: createRecipeDetailDto,
    });
  }

  async findAll() {
    return this.prisma.recipeDetail.findMany();
  }

  async findOne(id: number) {
    return this.prisma.recipeDetail.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRecipeDetailDto: UpdateRecipeDetailDto) {
    return this.prisma.recipeDetail.update({
      where: { id },
      data: updateRecipeDetailDto,
    });
  }

  async remove(id: number) {
    return this.prisma.recipeDetail.delete({
      where: { id },
    });
  }
}
