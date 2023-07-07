import React, {useState} from 'react';
import PostDetalis from "./PostDetalis/PostDetalis";

const Post = ({post}) => {
    const [isShow, setisShow] = useState(false)
    const {id,title}=post;
    return (
        <div>
           <div>id:{id}</div>
           <div>title:{title}</div>
            <button onClick={()=>setisShow(!isShow) }>{isShow?"Hide":"show"}</button>
            {
                isShow&&<PostDetalis post = {post}/>
            }
        </div>
    );
};

export default Post;