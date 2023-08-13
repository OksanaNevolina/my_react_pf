import React from 'react';

const Character = ({charac}) => {
    const {id, name, image} =charac;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;