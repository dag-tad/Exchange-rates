import axios from 'axios'
import env from '../config/env'
export default axios.create({
    baseURL: env.BASE_URL,
    headers: {
        'apikey': env.API_KEY,
        'redirect': 'follow'
    }
})