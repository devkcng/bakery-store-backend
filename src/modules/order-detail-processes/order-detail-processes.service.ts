import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateOrderDetailProcessDto } from './dto/create-order-detail-process.dto';
import { UpdateOrderDetailProcessDto } from './dto/update-order-detail-process.dto';

@Injectable()
export class OrderDetailProcessesService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDetailProcessDto: CreateOrderDetailProcessDto) {
    return this.prisma.orderDetailProcess.create({
      data: createOrderDetailProcessDto,
    });
  }

  async findAll() {
    return this.prisma.orderDetailProcess.findMany();
  }

  async findOne(id: number) {
    return this.prisma.orderDetailProcess.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateOrderDetailProcessDto: UpdateOrderDetailProcessDto,
  ) {
    return this.prisma.orderDetailProcess.update({
      where: { id },
      data: updateOrderDetailProcessDto,
    });
  }

  async remove(id: number) {
    return this.prisma.orderDetailProcess.delete({
      where: { id },
    });
  }
}
