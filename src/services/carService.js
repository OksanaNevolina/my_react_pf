import {apiService} from "./apiServices";
import {urls} from "../urlsConst/urls";

const carService ={
    getAll:()=>apiService.get(urls.cars.base),
    create:(car)=>apiService.post(urls.cars.base,car),
    updateById:(id,car)=>apiService.put(urls.cars.byId(id),car),
    deleteById:(id)=>apiService.put(urls.cars.byId(id)),
}
export {
    carService
}