import React from 'react';
import './Car.css'
import {apiServices} from "../../../services/apiServices";

const Car = ({car,setOnSave,setСarForUpdate}) => {
    const {id,brand,price,year} = car;
    const deleteCar = () => {
        apiServices.postLoginAxiosCar(data)
    }
    return (
        <div className='car'>
            <p>id- {id}</p>
            <p>brand- {brand}</p>
            <p>price- {price}</p>
            <p>year- {year}</p>
            <button onClick={()=>setСarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>


        </div>
    );
};

export default Car;