import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

@Injectable()
export class WarehousesService {
  constructor(private prisma: PrismaService) {}

  async create(createWarehouseDto: CreateWarehouseDto) {
    return this.prisma.wareHouse.create({
      data: createWarehouseDto,
    });
  }

  async findAll() {
    return this.prisma.wareHouse.findMany();
  }

  async findOne(id: number) {
    return this.prisma.wareHouse.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateWarehouseDto: UpdateWarehouseDto) {
    return this.prisma.wareHouse.update({
      where: { id },
      data: updateWarehouseDto,
    });
  }

  async remove(id: number) {
    return this.prisma.wareHouse.delete({
      where: { id },
    });
  }
}
