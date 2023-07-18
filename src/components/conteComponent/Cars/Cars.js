import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";
import {apiServices} from "../../../services/apiServices";


const Cars = ({onSave,setOnSave,setСarForUpdate}) => {
    const [cars , setCars] = useState([])
    useEffect(() => {
        apiServices.postLoginAxios(data)
    },[onSave])
    return (
        <div>
            {cars.map(car=><Car key = {car.id} car = {car}  setOnSave = {setOnSave} setСarForUpdate={setСarForUpdate} />)}

        </div>
    );
};

export default Cars;