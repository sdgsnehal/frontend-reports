import { Controller, useForm } from "react-hook-form";
import secureLocalStorage from "react-secure-storage";
import { messages } from "../../Language/en";
import { GoogleLogin } from "@react-oauth/google";

import { useGoogleLoginService, useLogin } from "./service.login";
type FormValues = {
  email: string;
  password: string;
  remember: boolean;
};
const getDefaultValues = () => {
  const email = secureLocalStorage.getItem("remember_me_email") as string;
  const password = secureLocalStorage.getItem("remember_me_password") as string;
  const remember = secureLocalStorage.getItem("remember_me_flag") as boolean;

  return {
    email: email ?? "",
    password: password ?? "",
    remember: remember ?? false,
  };
};
const Login = () => {
  // const navigate = useNavigate();
  const loginMutation = useLogin();
  const googleMutation = useGoogleLoginService();
  console.log(loginMutation);
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm<FormValues>({
    defaultValues: getDefaultValues(),
  });
  const onSubmit = async (values: FormValues) => {
    const { email, password } = values;
    if (email && password) {
      loginMutation.mutate({ ...values, email: values.email.trim() });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <header className="bg-[#536c8c] flex items-center justify-center w-full">
        <h3 className="text-4xl text-white my-4">Reports</h3>
      </header>
      <h3 className="text-3xl text-black font-semibold my-3">
        Welcome to Reports
      </h3>

      <form
        className="bg-white p-4 w-full md:w-1/3 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-lg font-semibold text-center text-black">
          Sign in to your account
        </p>
        <div className="flex justify-center w-full pt-2">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              googleMutation.mutate(credentialResponse);
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-full bg-gray-500"></div>
          <span className="text-gray-500 text-sm font-semibold">OR</span>
          <div className="h-px w-full bg-gray-500"></div>
        </div>
        <div className="relative mt-4">
          <Controller
            control={control}
            rules={{
              required: messages.VALIDATIONS.INVALID_EMAIL_ADDRESS,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: messages.VALIDATIONS.INVALID_EMAIL_ADDRESS,
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                type="email"
                placeholder="Enter email"
                value={value}
                onChange={onChange}
                required
                className="w-full bg-white p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
            name="email"
          />
        </div>
        <div className="relative mt-4">
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="password"
                placeholder="Enter password"
                value={value}
                required
                onChange={onChange}
                className="w-full bg-white p-4 text-sm border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
            name="password"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-indigo-600 text-white py-3 px-5 text-sm font-medium rounded-lg uppercase hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
        >
          Sign in
        </button>
        <p className="mt-4 text-center text-gray-500 text-sm">
          No account?{" "}
          <a href="/signup" className="underline text-indigo-600">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
