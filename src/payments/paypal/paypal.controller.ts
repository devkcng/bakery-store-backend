import { Controller, Post, Body, Param } from '@nestjs/common';
import { PaypalService } from './paypal.service';

@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}

  @Post('create-order')
  async createOrder(@Body('amount') amount: number) {
    const order = await this.paypalService.createOrder(amount);
    return order;
  }

  @Post('capture-order/:orderId')
  async captureOrder(@Param('orderId') orderId: string) {
    const capture = await this.paypalService.captureOrder(orderId);
    return capture;
  }
}
