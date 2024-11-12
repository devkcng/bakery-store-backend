import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data: createRecipeDto,
    });
  }

  async findAll() {
    return this.prisma.recipe.findMany();
  }

  async findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.recipe.delete({
      where: { id },
    });
  }
}
