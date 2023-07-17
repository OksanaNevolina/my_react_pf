import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";

const Cars = ({onSave,setOnSave,setСarForUpdate}) => {
    const [cars , setCars] = useState([])
    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(rev => rev.json())
            .then(value => setCars(value))
    },[onSave])
    return (
        <div>
            {cars.map(car=><Car key = {car.id} car = {car}  setOnSave = {setOnSave} setСarForUpdate={setСarForUpdate} />)}

        </div>
    );
};

export default Cars;