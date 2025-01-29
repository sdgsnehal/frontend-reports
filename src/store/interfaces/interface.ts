export interface DailyOrders {
  _id: string;
  totalOrders: number;
}

 export interface DailySales {
  _id: string;
  dailySales: number;
}

interface DailyAvgOrderValue {
  date: string;
  dailyAvgOrderValue: number;
}

interface MonthlySummary {
  year: number;
  month: number;
  revenue: number;
  unitsSold: number;
}

interface SalesData {
  quantity: number;
  totalSales: number;
  totalAvgOrderValue: number;
  dailyOrders: DailyOrders[];
  dailySales: DailySales[];
  dailyAvgOrderValue: DailyAvgOrderValue[];
  last7DaysSummary: []; // Assuming it's an empty array, you can specify a type if needed
  last6MonthsSummary: MonthlySummary[];
}

export interface ApiResponse {
  statusCode: number;
  data: SalesData;
  message: string;
  success: boolean;
}
