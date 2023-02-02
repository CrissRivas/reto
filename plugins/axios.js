import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || 'https://api.example.com',
  headers: {
    'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
  }
})

export default axiosInstance
