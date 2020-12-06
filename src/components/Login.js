import React, { useState } from 'react';
import { useForm }  from 'react-hook-form';
import axios from 'axios';
import auth from './Auth';

const Login = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:3001/musicians/login", {
            email: data.email,
            password: data.password
        })
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        // checkLogin();
        
    }

    const checkLogin = () => {
        auth.login(() => {
            props.history.push("/directory")
        })
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