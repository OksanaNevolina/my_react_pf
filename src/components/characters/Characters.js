import React from 'react';
import './Characters.css'

const Characters = ( {id,name,status,species,gender,image}) => {
    return (
        <div className='char'>
            <p>{id}</p>
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt="episode"/>
        </div>
    );
};

export default Characters;