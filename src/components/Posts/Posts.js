




import React, {useEffect} from 'react';
import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../redux/action/postAction";
import {PostsServices} from "../../services/postsServices";
const Posts = () => {
    const posts = useSelector((store)=>store.postsReduser.posts)
const dispatch = useDispatch()
   useEffect(()=>{

      PostsServices.getPosts(dispatch);
   },[])

    return (
        <div>
            {posts.map(pos=><Post key={pos.id} pos={pos}/>)}

        </div>
    );
};


export default Posts;