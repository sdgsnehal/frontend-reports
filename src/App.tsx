import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { LoadingProvider } from "./components/loader/loadingContext";
const queryClient = new QueryClient();

function App() {
  return (
    <LoadingProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </LoadingProvider>
  );
}

export default App;
