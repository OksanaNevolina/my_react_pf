import React from 'react';
import './simpsons.css';

const Simpsons = ({name, surname, age, photo}) => {
    return (
        <div className= 'mem'>
          <h1>{name} {surname} {age}</h1>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpsons;