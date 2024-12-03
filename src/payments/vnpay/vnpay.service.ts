import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import * as crypto from 'crypto';
import * as qs from 'qs';

@Injectable()
export class VnpayService {
  constructor(private prisma: PrismaService) {}

  async createOrder(amount: number, orderInfo: string): Promise<string> {
    const vnpUrl = process.env.VNP_URL;
    const vnpTmnCode = process.env.VNP_TMN_CODE;
    const vnpHashSecret = process.env.VNP_HASH_SECRET;
    const vnpReturnUrl = process.env.VNP_RETURN_URL;

    const date = new Date();
    const createDate = date
      .toISOString()
      .replace(/[-:T.]/g, '')
      .slice(0, 14);
    const orderId = date.getTime().toString();

    const ipAddr = process.env.IP_ADDR;

    const params: any = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode: vnpTmnCode,
      vnp_Locale: 'vn',
      vnp_CurrCode: 'VND',
      vnp_TxnRef: orderId,
      vnp_OrderInfo: orderInfo,
      vnp_OrderType: 'other',
      vnp_Amount: amount * 100,
      vnp_ReturnUrl: vnpReturnUrl,
      vnp_IpAddr: ipAddr,
      vnp_CreateDate: createDate,
    };

    const sortedParams = qs.stringify(params, { encode: false });
    const signData = vnpHashSecret + sortedParams;
    const secureHash = crypto
      .createHmac('sha512', vnpHashSecret)
      .update(signData)
      .digest('hex');

    params.vnp_SecureHash = secureHash;
    const queryString = qs.stringify(params, { encode: false });
    const paymentUrl = `${vnpUrl}?${queryString}`;

    return paymentUrl;
  }

  async captureOrder(query: any): Promise<any> {
    const vnpHashSecret = process.env.VNP_HASH_SECRET;
    const secureHash = query.vnp_SecureHash;
    delete query.vnp_SecureHash;
    delete query.vnp_SecureHashType;

    const sortedParams = qs.stringify(query, { encode: false });
    const signData = vnpHashSecret + sortedParams;
    const checkSum = crypto
      .createHmac('sha512', vnpHashSecret)
      .update(signData)
      .digest('hex');

    if (secureHash === checkSum) {
      const transaction = await this.saveTransaction(query);
      return transaction;
    } else {
      throw new Error('Invalid checksum');
    }
  }

  private async saveTransaction(order: any): Promise<any> {
    const transaction = await this.prisma.transaction.create({
      data: {
        payment_method: 'BANK_TRANSFER',
        status: order.vnp_ResponseCode === '00' ? 'SUCCESS' : 'FAILED',
        amount: order.vnp_Amount / 100,
        order_id: parseInt(order.vnp_TxnRef),
      },
    });

    return transaction;
  }
}
