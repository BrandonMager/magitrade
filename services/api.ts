import axios from "axios"

var API_URL = "https://jsonplaceholder.typicode.com"

if(process.env.NODE_ENV == "production"){
    API_URL = process.env.API_URL!
}

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
})
