import { useQuery } from "@tanstack/react-query";
import secureLocalStorage from "react-secure-storage";

export default function useObserveQuery(queryKey: string[]) {
  return useQuery({
    queryKey,
    enabled: false,
    initialData: () =>
      queryKey[0] === "auth" ? secureLocalStorage.getItem("user") : null,
  });
}
