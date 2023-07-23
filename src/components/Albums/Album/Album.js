import React from 'react';
import './Album.css'

const  Album = ({album}) => {
    const {id,title} = album;
    return (
        <div className='album'>
        <div>id- number '{id}'</div>
        <div>title- '{title}'</div>
            <br/>
            <hr/>

        </div>
    );
};

export default  Album;









