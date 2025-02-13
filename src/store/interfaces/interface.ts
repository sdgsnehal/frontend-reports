export interface DailyOrders {
  _id: string;
  totalOrders: number;
}

export interface DailySales {
  _id: string;
  dailySales: number;
}

export interface DailySpend {
  date: string;
  dailySales: number;
}
export interface DailyAvgOrderValue {
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
  totalSpend: number;
  dailyOrders: DailyOrders[];
  dailySales: DailySales[];
  dailySalesCompare:DailySales[]
  dailyAvgOrderValue: DailyAvgOrderValue[];
  dailyAvgOrderValueCompare:DailyAvgOrderValue[]
  dailyOrdersCompare:DailyOrders[]
  dailySpend: DailySpend[];
  compareDailySpend:DailySpend[];
  last7DaysSummary: []; // Assuming it's an empty array, you can specify a type if needed
  last6MonthsSummary: MonthlySummary[];
}
export interface GlobalProps {
  totalQuantity: string;
  totalItemPrice: number;
  merchantName: string;
  merchantEmail: string;
}
export interface ApiResponse {
  statusCode: number;
  data: SalesData;
  message: string;
  success: boolean;
}
