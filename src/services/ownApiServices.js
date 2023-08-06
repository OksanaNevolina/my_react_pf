import axios from "axios";
import {ownBaseURL} from "../constansa/urls";

const ownApiServices = axios.create({baseURL:ownBaseURL});


export {
    ownApiServices
}