import React from 'react';
import {useForm} from "react-hook-form";
import './users.css'
import {apiService} from "../servises/apiService";


const Users = () => {
    const {register,handleSubmit}=useForm()
const registration = (data) => {
apiService.postLoginAxios(data)
}
    return (
        <div>
            <form className='divForm' onSubmit= {handleSubmit(registration)}>
                <label><input type="text" placeholder={'name'} {...register('name')}/></label>
                <label><input type="text" placeholder={'username'} {...register('username')}/></label>
                <label><input type="text" placeholder={'email'} {...register('email')}/></label>
                <label><input type="text" placeholder={'phone'} {...register('phone')}/></label>
                 <button>registration</button>
            </form>

        </div>
    );
};

export default Users;