import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from "react-hook-form";
import { messages } from "../../Language";
import { useSignup } from "./service.signup";
type FormValues = {
  email: string;
  fullName: string;
  password: string;
  userName: string;
};

const Signup = () => {
  const SignupMutation = useSignup();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({});
  const onSubmit = async (values: FormValues) => {
    const { email, password, fullName, userName } = values;
    SignupMutation.mutate({ ...values, email: values.email.trim() });
    console.log(email, password, fullName);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <header className="bg-[#536c8c] flex items-center justify-center w-full sticky top-0">
        <h3 className="text-4xl text-white my-4">Reports</h3>
      </header>
      <h3 className="text-3xl text-black font-semibold my-3">
        Let's get you started with Reports
      </h3>

      <form
        className="bg-white p-4 w-full md:w-1/3 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-lg font-semibold text-center text-black">
          First you will need to create the account
        </p>
        <button className="button w-full flex items-center justify-center gap-3 px-5 py-2 mt-4 font-bold text-sm leading-5 text-gray-800 uppercase bg-white border border-gray-300 rounded-lg transition-transform duration-600 ease-in-out hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 262"
            className="h-6"
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            ></path>
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            ></path>
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            ></path>
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            ></path>
          </svg>
          Continue with Google
        </button>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-full bg-gray-500"></div>
          <span className="text-gray-500 text-sm font-semibold">OR</span>
          <div className="h-px w-full bg-gray-500"></div>
        </div>
        <div className="relative mt-4">
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="text"
                placeholder="Enter username"
                onChange={onChange}
                value={value}
                className="w-full bg-white p-4 text-sm border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
            name="userName"
          />
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
                required
                onChange={onChange}
                value={value}
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
                type="text"
                placeholder="Enter name"
                onChange={onChange}
                value={value}
                className="w-full bg-white p-4 text-sm border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
            name="fullName"
          />
        </div>
        <div className="relative mt-4">
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                type="password"
                value={value}
                onChange={onChange}
                required
                placeholder="Enter password"
                className="w-full bg-white p-4 text-sm border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
            name="password"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeATb8qAAAAAEdhWCA37Ji3g4S_qZAYr2c8_3R7"
          className="mt-4"
        />
        ,
        <button
          type="submit"
          className="w-full  bg-indigo-600 text-white py-3 px-5 text-sm font-medium rounded-lg uppercase hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
        >
          Sign up
        </button>
        <p className="mt-4 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <a href="#" className="underline text-indigo-600">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
