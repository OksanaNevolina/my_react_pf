import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import postsService from "../../services/postsService";
import PostDetail from "./PostDetail/PostDetail";

const Post = () => {
    const {postId} = useParams();
    const [post,setPost] = useState(null);
    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPost(data))
    },[postId])

    return (
        <div>
            {post&&<PostDetail post={post}/>}
        </div>
    );
};

export default Post;