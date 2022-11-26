import axios from "axios"
import authHeader from "./auth.token.header"

//apply base url for axios
const API_URL = "http://localhost:5005"

const client = axios.create({
  baseURL: API_URL,
})

//axiosApi.defaults.headers.common["Authorization"] = 'Bearer ' + authHeader()
client.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

// Add a request interceptor
// client.interceptors.request.use(
//   config => {
//     // const token = authHeader()
//     // if (token) {
//     //   config.headers['Authorization'] = 'Bearer ' + token;
//     // }
//     config.headers['Content-Type'] = 'application/json';
//     return config;
//   },
//   error => {
//     debugger
//     Promise.reject(error)
//   });

// client.interceptors.response.use(response => {
//   debugger
//   return response;
// }, error => {
//   // debugger
//   // if (error.response.status === 401) {
//   //   console.log(error)
//   // }
//   debugger
//   return error;
// })

export async function get(url, config = {}) {
  return await client
    .get(url, { ...config })
    .then(response => {
      return response
    })
}

export async function post(url, data, config = {}) {
  return await client
    .post(url, { ...data }, { ...config })
    .then(response => response)
}

export async function put(url, data, config = {}) {
  debugger
  return await client
    .put(url, { ...data }, { ...config })
    .then(response => response)
}

export async function del(url, config = {}) {
  return await client
    .delete(url, { ...config })
    .then(response => response)
}
