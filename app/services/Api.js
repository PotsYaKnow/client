import axios from 'axios/dist/axios'


let baseURL = 'http://10.0.2.2:8081/'

/*if (!TNS_ENV || TNS_ENV === 'development') {
  baseURL = `http://localhost:8081/`
} else {
  baseURL = 'https://potsyaknow-server.herokuapp.com'
}*/

export default () => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
