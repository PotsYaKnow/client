import axios from 'axios'
import store from '@/store/index'


let baseURL = null

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = `http://localhost:8081/`
} else {
  baseURL = 'https://potsyaknow-server.herokuapp.com'
}

export default () => {
  return axios.create({
    baseURL: baseURL,
    withCredentials: true
  })
}
