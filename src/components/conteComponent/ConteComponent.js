
import React, {useState} from 'react';
import CarsForm from "./CarsForm/CarsForm";
import Cars from "./Cars/Cars";

const ConteComponent = () => {
    const [onSave, setOnSave]= useState(null)
    const [carForUpdate, setСarForUpdate]= useState(null)

    return (
        <div>
            <CarsForm setOnSave = {setOnSave} carForUpdate={carForUpdate} setСarForUpdate = {setСarForUpdate} />
            <br/>
            <Cars onSave={onSave}  setOnSave = {setOnSave} setСarForUpdate = {setСarForUpdate} />

        </div>
    );
};

export default ConteComponent;