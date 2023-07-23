import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({com}) => {
    const {id,postId,name} = com;
    const navigate = useNavigate();
    return (
        <div>
            <div>{id}</div>
            <div>postId***{postId}</div>
            <div> name****{name}****</div>
            <button onClick={()=>navigate(`posts/${postId}`)} >GET POST</button>
            <br/>
            <hr/>


        </div>
    );
};

export default Comment;