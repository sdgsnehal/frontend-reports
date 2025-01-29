import { createContext, ReactNode, useContext, useState } from "react";
const LoadingContext = createContext<{
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>> | null;
}>({
  loading: false,
  setLoading: null,
});
interface LoadingProviderProps {
  children: ReactNode;
}
export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be within ");
  }
  return context;
}
