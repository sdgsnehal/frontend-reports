import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import API from "../../lib/api-client";
import secureLocalStorage from "react-secure-storage";
import toast from "react-hot-toast";
type Login = {
  email: string;
  password: string;
  remember?: boolean;
};
export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: Login) => API("post", "/api/v1/users/login", values),
    onSuccess: (data, values) => {
      const { email, password, remember } = values;
      if (remember) {
        secureLocalStorage.setItem("remember_me_email", email);
        secureLocalStorage.setItem("remember_me_password", password);
        secureLocalStorage.setItem("remember_me_flag", remember);
      } else {
        secureLocalStorage.clear();
      }
      const user = { data, isLoggedIn: true };
      queryClient.setQueryData(["auth"], user);
      secureLocalStorage.setItem("user", user);
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("This didn't work.");
    },
  });
}
