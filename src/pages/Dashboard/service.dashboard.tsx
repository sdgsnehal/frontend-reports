import { useQuery } from "@tanstack/react-query";
import API from "../../lib/api-client";
import { fa } from "@faker-js/faker";

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
      const response = await API("get", "/api/v1/fetch/dashboard", {
        params: { startDate, endDate, merchantId },
      });
      return response.data;
    },
    enabled: false,
  });
}
