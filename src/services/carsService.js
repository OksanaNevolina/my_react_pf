import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carsService = {
    getAll:()=> apiService.get(urls.cars.base),
    create:(car)=>apiService.post(urls.cars.base,car),
    updateByID : (id,car)=>apiService.put(urls.cars.byId(id)),
    deleteById:(id)=>apiService.delete(urls.cars.byId(id))
}
export {
    carsService
}