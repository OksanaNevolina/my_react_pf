import {plyApiServices} from "./plyApiServices";
import {urls} from "../constansa/urls";

class CommentsApiService{
    getAll(){
        return plyApiServices.get(urls.comments)
    }
}
export const commentsApiService =new CommentsApiService();