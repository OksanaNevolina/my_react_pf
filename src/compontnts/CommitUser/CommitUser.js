import React from 'react';
import {useForm} from "react-hook-form";
import './CommitUser.css'
import {apiService} from "../services/apiService";


const CommitUser = () => {
    const {register,handleSubmit}=useForm()
const registration = (data) => {
apiService.postLoginAxios(data)
}
    return (
        <div>
            <form className='divForm' onSubmit= {handleSubmit(registration)}>
                <label><input type="text" placeholder={'id'} {...register('id')}/></label>
                <label><input type="text" placeholder={'name'} {...register('name')}/></label>
                <label><input type="text" placeholder={'email'} {...register('email')}/></label>
                <label><input type="text" placeholder={'body'} {...register('body')}/></label>
                 <button>add a comment</button>
            </form>

        </div>
    );
};

export default CommitUser;