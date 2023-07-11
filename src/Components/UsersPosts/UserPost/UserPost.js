import React from 'react';
import './UserPost.css'

const UserPost = ({post}) => {
    const {id,userId,title,body} = post;
    return (
        <div className='post'>
            <h2>id: {id}</h2>
            <h2>userId: {userId}</h2>
            <h3>title: {title}</h3>
            <h4>body: {body}</h4>
        </div>
    );
};

export default UserPost;