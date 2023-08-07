import React from 'react';

const Post = ({pos}) => {
    const {userId,id,title,body} = pos;
    return (
        <div>
            <div><b>userId</b> : {userId}</div>
            <div>id : {id}</div>
            <div><h4>title</h4>  {title}</div>
            <div>body : {body}</div>
            <hr/>
        </div>
    );
};

export default Post;