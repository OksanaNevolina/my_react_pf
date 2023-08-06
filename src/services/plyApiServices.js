import axios from "axios";
import {plyBaseURL} from "../constansa/urls";

const plyApiServices = axios.create({baseURL:plyBaseURL});

export {plyApiServices}