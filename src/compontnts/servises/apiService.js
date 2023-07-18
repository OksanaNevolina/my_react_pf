import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
const Endpoints = {
    LOGIN :'/users'
}

export const apiService = {
    postLoginAxios: (data) => {
        instance.post(Endpoints.LOGIN, data)
            .then(data => console.log(data)
            )
    }
}