import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const episodesService ={
    getAll:(page)=> apiServices.get(urls.episodes,{params:{page}})

}
export {
    episodesService
}