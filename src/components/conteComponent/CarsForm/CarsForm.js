import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {Context} from "../ConteComponent";
import {carService} from "../../../services/carService";
import './CarsForm.css'


const CarsForm = () => {
    const {reset, register,handleSubmit,setValue} = useForm();
    const [errors,setErrors] = useState(null);
    const {setTrigger, carForUpdate,setCarForUpdate } = useContext(Context);
    if (carForUpdate){
        setValue('brand',carForUpdate.brand)
        setValue('price',carForUpdate.price)
        setValue('year',carForUpdate.year)

    }
    const save = async (car) => {
     try {
         await carService.create(car);
         setErrors(null)
         reset()
         setTrigger()
     }catch (e){
         setErrors(e.response.data)
     }
    }

    const update = (car) => {
        carService.updateById(carForUpdate.id,car)
        reset()
        setTrigger()
        setCarForUpdate(null)

    }
    return (
        <div>
            <form className='formCar' onSubmit={handleSubmit(!carForUpdate? save :update)}>
            <label ><input type="text" placeholder={'brand'} {...register('brand')} /></label>
            <label ><input type="text" placeholder={'price'} {...register('price')} /></label>
            <label ><input type="text" placeholder={'year'} {...register('year')} /></label>
            <button>{!carForUpdate?'save' : 'update'}</button>
            </form>
            {errors&&JSON.stringify(errors)}
        </div>
    );
};

export default CarsForm;