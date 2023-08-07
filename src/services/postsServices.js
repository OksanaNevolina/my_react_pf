import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";
import {userAction} from "../redux/action/postAction";
//
// const postsServices ={
//    getAll:()=>apiServices.get(urls.posts)
// }
// export {
//    postsServices
// }
const PostsServices = {
   getPosts: async (dispatch)=>{
      try {
         let res = await apiServices.get(urls.posts)
         dispatch(userAction.setPosts(res.data))

         console.log(res.data)
      }catch{
      }
   }
}
export {
   PostsServices
}