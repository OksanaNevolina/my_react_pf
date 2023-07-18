import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {validCars} from "../../valid/validCars";
import './CarsForm.css'
import {apiServices} from "../../../services/apiServices";
const FormCar = ({setOnSave,carForUpdate,setСarForUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid},setValue}= useForm({
        mode: "all",
        resolver:joiResolver(validCars)
    });
    useEffect(()=>{
        if(carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
        }
    },[carForUpdate])
    const save = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data),
            method:'POST'
        }).then(value => {
            if (!value.ok){
                throw Error(value.status+'not ok')
            }
            return value.json()
        })
            .then(()=> {
                setOnSave(prev => !prev)
                reset()
            })
            .catch(e=>{
                console.log(e)
            })
    }
    const update = (car) => {
        apiServices.postLoginAxioUpdete(data)
    }
    return (
        <div>
            <form className='formCar' onSubmit={handleSubmit(!carForUpdate?save:update)}>
                <label > <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                {errors.brand && <p>{errors.brand.message}</p>}
                <label> <input type="text" placeholder={'price'} {...register('price')}/></label>
                {errors.price && <p>{errors.price.message}</p>}
                <label > <input type="text" placeholder={'year'} {...register('year')}/></label>
                {errors.year && <p>{errors.year.message}</p>}

                <button disabled={!isValid}>{!carForUpdate?'SAVE':'UPDATE'}</button>

            </form>

        </div>
    );
};

export default FormCar;