import { useQuery } from "@tanstack/react-query";
import API from "../../lib/api-client";

type SalesDashboardParams = {
  startDate: string;
  endDate: string;
  merchantId: string | number;
};

export function useSalesDashboard({
  startDate,
  endDate,
  merchantId,
}: SalesDashboardParams) {
  return useQuery({
    queryKey: ["sales-dashboard", startDate, endDate, merchantId],
    queryFn: async () => {
      const response = await API("get", "/sales/dashboard", {
        params: { startDate, endDate, merchantId },
      });
      return response.data;
    },
    enabled: !!startDate && !!endDate && !!merchantId, // Prevents API calls if params are missing
  });
}
