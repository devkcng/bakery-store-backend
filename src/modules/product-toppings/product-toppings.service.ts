import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateProductToppingDto } from './dto/create-product-topping.dto';
import { UpdateProductToppingDto } from './dto/update-product-topping.dto';

@Injectable()
export class ProductToppingsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductToppingDto: CreateProductToppingDto) {
    return this.prisma.productTopping.create({
      data: createProductToppingDto,
    });
  }

  async findAll() {
    return this.prisma.productTopping.findMany();
  }

  async findOne(id: number) {
    return this.prisma.productTopping.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProductToppingDto: UpdateProductToppingDto) {
    return this.prisma.productTopping.update({
      where: { id },
      data: updateProductToppingDto,
    });
  }

  async remove(id: number) {
    return this.prisma.productTopping.delete({
      where: { id },
    });
  }
}
