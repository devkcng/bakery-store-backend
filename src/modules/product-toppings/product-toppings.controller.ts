import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductToppingsService } from './product-toppings.service';
import { CreateProductToppingDto } from './dto/create-product-topping.dto';
import { UpdateProductToppingDto } from './dto/update-product-topping.dto';

@Controller('product-toppings')
export class ProductToppingsController {
  constructor(
    private readonly productToppingsService: ProductToppingsService,
  ) {}

  @Post()
  create(@Body() createProductToppingDto: CreateProductToppingDto) {
    return this.productToppingsService.create(createProductToppingDto);
  }

  @Get()
  findAll() {
    return this.productToppingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productToppingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductToppingDto: UpdateProductToppingDto,
  ) {
    return this.productToppingsService.update(+id, updateProductToppingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productToppingsService.remove(+id);
  }
}
