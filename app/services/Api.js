import axios from 'axios/dist/axios'


let baseURL = 'http://localhost:8081/'

/*if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = `http://localhost:8081/`
} else {
  baseURL = 'https://potsyaknow-server.herokuapp.com'
}*/

export default () => {
  return axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
