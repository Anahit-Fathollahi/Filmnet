import axios, { AxiosRequestConfig } from "axios";

export const callApi = async (
  addPath = "",
  method = "GET",
  data = null,
  params = {},
  headers = {}
) => {
  // headers
  axios.defaults.headers.common["Accept"] = "*/*";

  // authorization
  const token = "";
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // baseUrl
  const baseUrl = "https://filmnet.ir/api-v2/";

  // axiosOptions
  const axiosOptions: AxiosRequestConfig<any> = {
    baseURL: baseUrl,
    url: addPath,
    method,
    responseType: "json",
    headers,
    params,
    data,
  };
  // return
  return await new Promise((resolve, reject) => {
    axios(axiosOptions)
      .then((res) => {
        if (res.data?.error?.message) {
          //   notificationMaker(res.data.error.message)
        }
        resolve(res);
      })
      .catch((e) => {
        reject(e);
        throw new Error();
      });
  });
};
