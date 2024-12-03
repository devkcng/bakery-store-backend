import { PrismaService } from '@/modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import * as paypal from '@paypal/checkout-server-sdk';

@Injectable()
export class PaypalService {
  private client: paypal.core.PayPalHttpClient;

  constructor(private prisma: PrismaService) {
    const environment = new paypal.core.SandboxEnvironment(
      process.env.PAYPAL_CLIENT_ID,
      process.env.PAYPAL_CLIENT_SECRET,
    );
    this.client = new paypal.core.PayPalHttpClient(environment);
  }

  async createOrder(amount: number): Promise<any> {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: amount.toString(),
          },
        },
      ],
    });

    const response = await this.client.execute(request);
    return response.result;
  }

  async captureOrder(orderId: string): Promise<any> {
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});
    const response = await this.client.execute(request);

    if (response.result.status === 'COMPLETED') {
      const transaction = await this.saveTransaction(response.result);
      return transaction;
    }

    return response.result;
  }

  private async saveTransaction(order: any): Promise<any> {
    const transaction = await this.prisma.transaction.create({
      data: {
        payment_method: 'E_WALLET',
        status: 'SUCCESS',
        amount: parseFloat(order.purchase_units[0].amount.value),
        order_id: parseInt(order.id),
      },
    });

    return transaction;
  }
}
