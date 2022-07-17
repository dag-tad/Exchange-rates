import {APP_NAME, BASE_URL, DEV_API_KEY, PROD_API_KEY, } from "@env"

const Dev_Env = {
    API_KEY: DEV_API_KEY,
    APP_NAME,
    BASE_URL
}

const Prod_Env = {
    API_KEY: PROD_API_KEY,
    APP_NAME,
    BASE_URL
}

export default __DEV__ ? Dev_Env : Prod_Env