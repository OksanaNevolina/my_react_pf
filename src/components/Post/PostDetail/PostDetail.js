import React from 'react';

const PostDetail = ({post}) => {
    const {id,title} = post;
    return (
        <div>
         <p>{id}</p>
         <p>{title}</p>


        </div>
    );
};

export default PostDetail;