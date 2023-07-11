import React, {useEffect, useState} from 'react';
import UserPost from "./UserPost/UserPost";

const UsersPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(rev=>rev.json())
            .then(post => setPosts(post) )
    },[userId])
    return (
        <div>
            {posts.map(post => <UserPost
                key ={post.id}
                post = {post}/>)}
        </div>
    );
};

export default UsersPosts;