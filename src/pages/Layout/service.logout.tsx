import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import API from "../../lib/api-client";
import secureLocalStorage from "react-secure-storage";
import toast from "react-hot-toast";
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => API("post", "/api/v1/users/logout"), 
    onSuccess: () => {
      secureLocalStorage.removeItem("user");
      secureLocalStorage.removeItem("remember_me_email");
      secureLocalStorage.removeItem("remember_me_password");
      secureLocalStorage.removeItem("remember_me_flag");
      queryClient.setQueryData(["auth"], { data: null, isLoggedIn: false });
      navigate("/login");
      toast.success("Logged out successfully!");
    },
    onError: () => {
      toast.error("Logout failed. Please try again.");
    },
  });
}
