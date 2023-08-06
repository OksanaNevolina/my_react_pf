import {plyApiServices} from "./plyApiServices";
import {urls} from "../constansa/urls";

class PostsApiService{
    getAll(){
        return plyApiServices.get(urls.posts)
    }
}
export const postsApiService = new PostsApiService();