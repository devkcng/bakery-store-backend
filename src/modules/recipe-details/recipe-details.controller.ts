import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipeDetailsService } from './recipe-details.service';
import { CreateRecipeDetailDto } from './dto/create-recipe-detail.dto';
import { UpdateRecipeDetailDto } from './dto/update-recipe-detail.dto';

@Controller('recipe-details')
export class RecipeDetailsController {
  constructor(private readonly recipeDetailsService: RecipeDetailsService) {}

  @Post()
  create(@Body() createRecipeDetailDto: CreateRecipeDetailDto) {
    return this.recipeDetailsService.create(createRecipeDetailDto);
  }

  @Get()
  findAll() {
    return this.recipeDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecipeDetailDto: UpdateRecipeDetailDto,
  ) {
    return this.recipeDetailsService.update(+id, updateRecipeDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeDetailsService.remove(+id);
  }
}
