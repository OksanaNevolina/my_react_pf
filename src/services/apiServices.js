import axios from "axios";
import {baseURL} from "../urlsConst/urls";


const apiService = axios.create({baseURL});
export {
    apiService
}