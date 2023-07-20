import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {Context} from "../ConteComponent";
import {carService} from "../../../services/carService";
import './CarsForm.css'


const CarsForm = () => {
    const {reset, register,handleSubmit} = useForm();
    const [errors,setErrors] = useState(null);
    const {setTrigger} = useContext(Context);
    const save = async (car) => {
        try {
            await carService.create(car);
            setErrors(null)
            reset()
            setTrigger()

        } catch (e) {
           setErrors(e.response.data)
        }

    }
    return (
        <div>
            <form className='formCar' onClick={handleSubmit(save)}>
            <label ><input type="text" placeholder={'brand'} {...register('brand')} /></label>
            <label ><input type="text" placeholder={'price'} {...register('price')} /></label>
            <label ><input type="text" placeholder={'year'} {...register('year')} /></label>
            <button>save</button>
            </form>
            {errors&&JSON.stringify(errors)}
        </div>
    );
};

export default CarsForm;