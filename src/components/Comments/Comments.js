import React, {useEffect, useState} from 'react';
import commentsService from "../../services/commentsService";
import Comment from "./Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        commentsService.getAll().then(({data})=> setComments(data))
    })
    return (
        <div>
            {comments.map(com=> <Comment key={com.id} com={com}/>)}

        </div>
    );
};

export default Comments;