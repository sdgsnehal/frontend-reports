import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import API from "../../lib/api-client";
import secureLocalStorage from "react-secure-storage";
import toast from "react-hot-toast";
type Signup = {
  userName: string;
  fullName: string;
  email: string;
  password: string;
};
export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: Signup) =>
      API("post", "/api/v1/users/register", values),
    onSuccess: (data) => {
      const user = { data, isLoggedIn: true };
      queryClient.setQueryData(["auth"], user);
      secureLocalStorage.setItem("user", user);
      navigate("/dashboard");
    },
  });
}
