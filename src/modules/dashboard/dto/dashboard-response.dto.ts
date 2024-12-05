export class DashboardResponseDto {
  revenue: number;
  cost: number;
  profit: number;
  topSellingProducts: { name: string; percentage: number }[];
  ovenStatus: { id: number; status: string; currentCapacityUsed: number }[];
  chartData: { labels: string[]; values: number[] };
}
