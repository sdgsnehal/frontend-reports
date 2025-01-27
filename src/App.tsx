import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
