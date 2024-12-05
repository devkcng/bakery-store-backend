import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardResponseDto } from './dto/dashboard-response.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getDashboardData(): Promise<DashboardResponseDto> {
    const dashboardData = await this.dashboardService.getDashboardData();
    return {
      revenue: dashboardData.revenue,
      cost: dashboardData.cost,
      profit: dashboardData.profit,
      topSellingProducts: dashboardData.topSellingProducts,
      ovenStatus: dashboardData.ovenStatus,
      chartData: {
        labels: dashboardData.chartData.labels,
        values: dashboardData.chartData.values,
      },
    };
  }
}
