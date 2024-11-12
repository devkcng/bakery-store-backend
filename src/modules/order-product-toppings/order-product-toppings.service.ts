import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateOrderProductToppingDto } from './dto/create-order-product-topping.dto';
import { UpdateOrderProductToppingDto } from './dto/update-order-product-topping.dto';

@Injectable()
export class OrderProductToppingsService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderProductToppingDto: CreateOrderProductToppingDto) {
    return this.prisma.orderProductTopping.create({
      data: createOrderProductToppingDto,
    });
  }

  async findAll() {
    return this.prisma.orderProductTopping.findMany();
  }

  async findOne(id: number) {
    return this.prisma.orderProductTopping.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateOrderProductToppingDto: UpdateOrderProductToppingDto,
  ) {
    return this.prisma.orderProductTopping.update({
      where: { id },
      data: updateOrderProductToppingDto,
    });
  }

  async remove(id: number) {
    return this.prisma.orderProductTopping.delete({
      where: { id },
    });
  }
}
