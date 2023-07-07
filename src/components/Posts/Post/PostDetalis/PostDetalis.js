import React from 'react';

const PostDetalis = ({post}) => {
    const {id,title,body}= post;
    return (
        <div>
            <hr/>
            <div>{id}</div>
            <div> <b>{title}</b> </div>
            <div>{body}</div>
            <hr/>
        </div>
    );
};

export default PostDetalis;