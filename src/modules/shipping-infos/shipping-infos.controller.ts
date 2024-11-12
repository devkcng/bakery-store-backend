import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShippingInfosService } from './shipping-infos.service';
import { CreateShippingInfoDto } from './dto/create-shipping-info.dto';
import { UpdateShippingInfoDto } from './dto/update-shipping-info.dto';

@Controller('shipping-infos')
export class ShippingInfosController {
  constructor(private readonly shippingInfosService: ShippingInfosService) {}

  @Post()
  create(@Body() createShippingInfoDto: CreateShippingInfoDto) {
    return this.shippingInfosService.create(createShippingInfoDto);
  }

  @Get()
  findAll() {
    return this.shippingInfosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingInfosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShippingInfoDto: UpdateShippingInfoDto,
  ) {
    return this.shippingInfosService.update(+id, updateShippingInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingInfosService.remove(+id);
  }
}
