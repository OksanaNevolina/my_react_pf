import React from 'react';
import './Car.css'

const Car = ({car}) => {
    const {id,brand,price,year}=car;
    return (
        <div className='car'>
           <div>id-{id}</div>
           <div>brand-{brand}</div>
           <div>price-{price}</div>
           <div>year-{year}</div>
            <button>delete</button>
            <button>update</button>

        </div>
    );
};

export default Car;