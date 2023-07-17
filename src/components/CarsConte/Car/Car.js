import React from 'react';
import './Car.css'

const Car = ({car,setOnSave,setСarForUpdate}) => {
    const {id,brand,price,year} = car;
    const deleteCar = () => {
      fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{method:"DELETE"})
          .then(() =>{
              setOnSave(prev=>!prev)
          })
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