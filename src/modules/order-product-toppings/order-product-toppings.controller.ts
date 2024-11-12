import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderProductToppingsService } from './order-product-toppings.service';
import { CreateOrderProductToppingDto } from './dto/create-order-product-topping.dto';
import { UpdateOrderProductToppingDto } from './dto/update-order-product-topping.dto';

@Controller('order-product-toppings')
export class OrderProductToppingsController {
  constructor(
    private readonly orderProductToppingsService: OrderProductToppingsService,
  ) {}

  @Post()
  create(@Body() createOrderProductToppingDto: CreateOrderProductToppingDto) {
    return this.orderProductToppingsService.create(
      createOrderProductToppingDto,
    );
  }

  @Get()
  findAll() {
    return this.orderProductToppingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderProductToppingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderProductToppingDto: UpdateOrderProductToppingDto,
  ) {
    return this.orderProductToppingsService.update(
      +id,
      updateOrderProductToppingDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderProductToppingsService.remove(+id);
  }
}
