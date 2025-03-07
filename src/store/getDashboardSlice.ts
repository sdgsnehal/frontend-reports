import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "./interfaces/interface";

const initialState: ApiResponse = {
  statusCode: 400,
  data: {
    quantity: 0,
    totalSales: 0,
    totalAvgOrderValue: 0,
    totalSpend: 0,
    dailyOrders: [],
    dailySales: [],
    dailyAvgOrderValue: [],
    dailySalesCompare: [],
    dailyAvgOrderValueCompare: [],
    dailyOrdersCompare: [],
    dailySpend: [],
    compareDailySpend: [], 
    last7DaysSummary: [],
    last6MonthsSummary: [],
  },
  message: "test",
  success: true,
};


export const dashboardDataSlice = createSlice({
  name: "dashboardData",
  initialState,
  reducers: {
    DashboardData: (state, action: PayloadAction<ApiResponse>) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { DashboardData } = dashboardDataSlice.actions;
export default dashboardDataSlice.reducer;
