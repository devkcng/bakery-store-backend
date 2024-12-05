import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboardData(): Promise<any> {
    // Calculate Revenue
    const revenue = await this.prisma.order.aggregate({
      _sum: { total_amount: true },
    });

    const cost = revenue._sum.total_amount / 3;

    const profit = revenue._sum.total_amount - cost;

    // Top 10 Selling Products
    const topSellingProducts = await this.prisma.orderDetail.groupBy({
      by: ['product_id'],
      _sum: { product_quantity: true },
      orderBy: { _sum: { product_quantity: 'desc' } },
      take: 10,
    });

    const topProducts = await Promise.all(
      topSellingProducts.map(async (product) => {
        const productName = await this.prisma.product.findUnique({
          where: { id: product.product_id },
          select: { name: true },
        });
        return {
          name: productName.name,
          percentage: (product._sum.product_quantity / 100) * 100,
        };
      }),
    );

    // Oven Status
    const ovenStatus = await this.prisma.oven.findMany({
      select: {
        id: true,
        status: true,
        current_capacity_used: true,
      },
    });

    // Generate Chart Data: Revenue by Month
    const chartData = await this.prisma.order.groupBy({
      by: ['order_date'],
      _sum: { total_amount: true },
      orderBy: { order_date: 'asc' }, // Sort by date ascending
    });

    // Format chart data (labels: months, values: revenue)
    const labels = chartData.map((item) => {
      return item.order_date.toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      }); // Get formatted month-year
    });

    const values = chartData.map((item) => item._sum.total_amount);

    // Prepare chart data format for frontend
    const chart = {
      labels,
      values,
    };

    return {
      revenue: revenue._sum.total_amount,
      cost,
      profit,
      topSellingProducts: topProducts,
      ovenStatus,
      chartData: chart, // Include chart data
    };
  }
}
