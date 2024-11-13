import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateOvenDto } from './dto/create-oven.dto';
import { UpdateOvenDto } from './dto/update-oven.dto';

@Injectable()
export class OvensService {
  constructor(private prisma: PrismaService) {}

  async create(createOvenDto: CreateOvenDto) {
    return this.prisma.oven.create({
      data: createOvenDto,
    });
  }

  async findAll() {
    return this.prisma.oven.findMany();
  }

  async findOne(id: number) {
    return this.prisma.oven.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateOvenDto: UpdateOvenDto) {
    return this.prisma.oven.update({
      where: { id },
      data: updateOvenDto,
    });
  }

  async remove(id: number) {
    return this.prisma.oven.delete({
      where: { id },
    });
  }
}
