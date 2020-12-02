import React, { useState } from 'react';
import { useForm }  from 'react-hook-form';
import axios from 'axios';

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="email" name="email" ref={register({ required: true})}/>
                <label>Password</label>
                <input type="password" name="password" ref={register({ required: true})}/>
                <button type="submit">Confirm</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}

export default Login;