import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: {
        ...updateOrderDto,
        order_status: updateOrderDto.order_status as OrderStatus,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}
