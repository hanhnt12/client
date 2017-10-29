import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/api/`,
    headers: {
      // 'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    proxy: {
      host: 'localhost',
      port: 3000
    }
  })
}
