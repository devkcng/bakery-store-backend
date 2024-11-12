import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OvensService } from './ovens.service';
import { CreateOvenDto } from './dto/create-oven.dto';
import { UpdateOvenDto } from './dto/update-oven.dto';

@Controller('ovens')
export class OvensController {
  constructor(private readonly ovensService: OvensService) {}

  @Post()
  create(@Body() createOvenDto: CreateOvenDto) {
    return this.ovensService.create(createOvenDto);
  }

  @Get()
  findAll() {
    return this.ovensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ovensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOvenDto: UpdateOvenDto) {
    return this.ovensService.update(+id, updateOvenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ovensService.remove(+id);
  }
}
