import Axios from './Axios'

const axios = new Axios({ baseURL: import.meta.env.VITE_DEV_URL, timeout: 10000 })

export default axios
