import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderDetailProcessesService } from './order-detail-processes.service';
import { CreateOrderDetailProcessDto } from './dto/create-order-detail-process.dto';
import { UpdateOrderDetailProcessDto } from './dto/update-order-detail-process.dto';

@Controller('order-detail-processes')
export class OrderDetailProcessesController {
  constructor(
    private readonly orderDetailProcessesService: OrderDetailProcessesService,
  ) {}

  @Post()
  create(@Body() createOrderDetailProcessDto: CreateOrderDetailProcessDto) {
    return this.orderDetailProcessesService.create(createOrderDetailProcessDto);
  }

  @Get()
  findAll() {
    return this.orderDetailProcessesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderDetailProcessesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderDetailProcessDto: UpdateOrderDetailProcessDto,
  ) {
    return this.orderDetailProcessesService.update(
      +id,
      updateOrderDetailProcessDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderDetailProcessesService.remove(+id);
  }
}
