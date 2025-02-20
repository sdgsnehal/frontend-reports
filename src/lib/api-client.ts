import Axios, { Method } from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  withCredentials: true,
  // withXSRFToken: true,
});

// A function that calls '/api/csrf-cookie' to set the CSRF cookies. The
// default is 'sanctum/csrf-cookie' but you can configure it to be anything.
// const setCSRFToken = () => {
//   return axios.get("/api/csrf-cookie");
// };

// axios.interceptors.request.use((config) => {
//   // If http method is `post | put | delete` and XSRF-TOKEN cookie is
//   // not present, call '/sanctum/csrf-cookie' to set CSRF token, then
//   // proceed with the initial response
//   if (
//     config.method === "post" ||
//     config.method === "put" ||
//     config.method === "delete"
//   ) {
//     return config;
//   }

//   return config;
// });

// export default async function API(method: Method = "get", url = "", data = {}) {
//   try {
//     const response = await axios[method](url, data);
//     if (!response) {
//       throw false;
//     }
//     return response;
//   } catch (error: any) {
//     throw error.response;
//   }
// }
export default async function API(
  method: Method = "get",
  url = "",
  data = {},
  config = {}
) {
  try {
    const response = await axios.request({
      method,
      url,
      data,
      withCredentials: true, 
      ...config,
    });
    return response;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response;
  }
}
