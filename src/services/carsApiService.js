import {ownApiServices} from "./ownApiServices";
import {urls} from "../constansa/urls";

class CarsApiService {

    getAll(){
        return  ownApiServices.get(urls.cars)
    }
}
export const carsApiService = new CarsApiService();