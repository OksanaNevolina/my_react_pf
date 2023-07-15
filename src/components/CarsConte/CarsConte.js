import React, {useState} from 'react';
import Cars from "./Cars/Cars";
import FormCar from "./FormCar/FormCar";

const CarsConte = () => {
    const [onSave, setOnSave]= useState(null)
    return (
        <div>
            <FormCar setOnSave = {setOnSave}/>
            <br/>
            <Cars onSave ={onSave}/>

        </div>
    );
};

export default CarsConte;