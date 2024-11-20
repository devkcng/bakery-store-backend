import { Controller, Post, Body, Query } from '@nestjs/common';
import { VnpayService } from './vnpay.service';

@Controller('vnpay')
export class VnpayController {
  constructor(private readonly vnpayService: VnpayService) {}

  @Post('create-order')
  async createOrder(
    @Body('amount') amount: number,
    @Body('orderInfo') orderInfo: string,
  ) {
    const paymentUrl = await this.vnpayService.createOrder(amount, orderInfo);
    return { paymentUrl };
  }

  @Post('capture-order')
  async captureOrder(@Query() query: any) {
    const capture = await this.vnpayService.captureOrder(query);
    return capture;
  }
}
