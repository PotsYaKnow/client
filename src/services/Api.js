import axios from 'axios'
import store from '@/store/index'


let baseURL = null

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = `http://localhost:8081/`
} else {
  baseURL = process.env.prod_url
}

export default () => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:8000",
      "Access-Control-Allow-Headers": "*"

    }
  })
}
