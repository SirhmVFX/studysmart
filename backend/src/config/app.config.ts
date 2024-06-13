import {configDotenv} from "dotenv";
const AppConfig = {
    server: {
        port: process.env.PORT as string,
        baseURL: process.env.BASE_URL as string
    }
}

export default AppConfig;