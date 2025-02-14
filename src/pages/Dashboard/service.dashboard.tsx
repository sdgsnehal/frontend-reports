import { useQuery } from "@tanstack/react-query";
import API from "../../lib/api-client";

type SalesDashboardParams = {
  startDate: string;
  endDate: string;
  merchantId: string | number;
  isCompare: boolean;
  startCompareDate: string;
  endCompareDate: string;
};
type GetSheetDataProps = {
  merchantId: string | number;
};

export function useSalesDashboard({
  startDate,
  endDate,
  merchantId,
  isCompare,
  startCompareDate,
  endCompareDate,
}: SalesDashboardParams) {
  return useQuery({
    queryKey: [
      "sales-dashboard",
      startDate,
      endDate,
      merchantId,
      isCompare,
      startCompareDate,
      endCompareDate,
    ],
    queryFn: async () => {
      const response = await API(
        "get",
        `/api/v1/fetch/dashboard?startDate=${startDate}&endDate=${endDate}&merchantId=${merchantId}&isCompare=${isCompare}&startCompareDate=${startCompareDate}&endCompareDate=${endCompareDate}`,
        {
          params: { startDate, endDate, merchantId },
        }
      );
      return response.data;
    },
    enabled: false,
  });
}
export function useGetSheetData({ merchantId }: GetSheetDataProps) {
  console.log(merchantId);
  return useQuery({
    queryKey: ["get-sheet-data", merchantId],
    queryFn: async () => {
      const response = await API(
        "get",
        `/api/v1/fetch/data?merchantId=${merchantId}`,
        {
          params: { merchantId },
        }
      );
      return response.data;
    },
    enabled: false,
  });
}
