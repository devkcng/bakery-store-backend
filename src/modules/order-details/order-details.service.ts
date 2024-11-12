import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Injectable()
export class OrderDetailsService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDetailDto: CreateOrderDetailDto) {
    return this.prisma.orderDetail.create({
      data: createOrderDetailDto,
    });
  }

  async findAll() {
    return this.prisma.orderDetail.findMany();
  }

  async findOne(id: number) {
    return this.prisma.orderDetail.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.prisma.orderDetail.update({
      where: { id },
      data: updateOrderDetailDto,
    });
  }

  async remove(id: number) {
    return this.prisma.orderDetail.delete({
      where: { id },
    });
  }
}
