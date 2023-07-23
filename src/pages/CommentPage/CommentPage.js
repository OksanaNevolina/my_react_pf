import React from 'react';
import {Outlet} from "react-router-dom";
import Comments from "../../components/Comments/Comments";
import './CommentPage.css'
const CommentPage = () => {
    return (
        <div className='CP'>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export default CommentPage;