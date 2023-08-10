import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const characterService={
   getByIds: (iDs) =>apiServices.get(urls.characters.byIds(iDs))
}
export {
    characterService
}