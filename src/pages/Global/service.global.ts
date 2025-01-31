import { useQuery } from "@tanstack/react-query";
import API from "../../lib/api-client";

type GlobalParams = {
  startDate: string;
  endDate: string;
};

export function useGlobal({ startDate, endDate }: GlobalParams) {
  return useQuery({
    queryKey: ["global-report", startDate, endDate],
    queryFn: async () => {
      const response = await API("get", "/api/v1/fetch/global", {
        params: { startDate, endDate },
      });
      return response.data;
    },
    enabled: false,
  });
}
