import React, {useContext} from 'react';
import './Car.css'
import {Context} from "../ConteComponent";
import {carService} from "../../../services/carService";

const Car = ({car}) => {
    const {id,brand,price,year}=car;
    const {setCarForUpdate,setTrigger} = useContext(Context);
    const deleteCar = () => {
      carService.deleteById(id)
        setTrigger()
    }
    return (
        <div className='car'>
           <div>id-{id}</div>
           <div>brand-{brand}</div>
           <div>price-{price}</div>
           <div>year-{year}</div>
            <button onClick={deleteCar}>delete</button>
            <button onClick={()=>setCarForUpdate(car)}>update</button>

        </div>
    );
};

export default Car;