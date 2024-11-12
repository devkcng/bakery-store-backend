import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateShippingInfoDto } from './dto/create-shipping-info.dto';
import { UpdateShippingInfoDto } from './dto/update-shipping-info.dto';

@Injectable()
export class ShippingInfosService {
  constructor(private prisma: PrismaService) {}

  async create(createShippingInfoDto: CreateShippingInfoDto) {
    return this.prisma.shippingInfo.create({
      data: createShippingInfoDto,
    });
  }

  async findAll() {
    return this.prisma.shippingInfo.findMany();
  }

  async findOne(id: number) {
    return this.prisma.shippingInfo.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateShippingInfoDto: UpdateShippingInfoDto) {
    return this.prisma.shippingInfo.update({
      where: { id },
      data: updateShippingInfoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.shippingInfo.delete({
      where: { id },
    });
  }
}
