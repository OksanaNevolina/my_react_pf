import React, {useState} from 'react';
import Cars from "./Cars/Cars";
import FormCar from "./FormCar/FormCar";

const CarsConte = () => {
    const [onSave, setOnSave]= useState(null)
    const [carForUpdate, setСarForUpdate]= useState(null)
    return (
        <div>
            <FormCar setOnSave = {setOnSave} carForUpdate={carForUpdate} setСarForUpdate = {setСarForUpdate} />
            <br/>
            <Cars onSave={onSave}  setOnSave = {setOnSave} setСarForUpdate = {setСarForUpdate} />

        </div>
    );
};

export default CarsConte;