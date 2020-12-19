import React, { useState } from 'react';
import { useForm }  from 'react-hook-form';
import axios from 'axios';
import auth from './Auth';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';

const Login = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:3001/musicians/login", {
            email: data.email,
            password: data.password
        })
        .then(resp => checkLogin(resp))
        .catch(error => console.log(error))
    }

    const checkLogin = (resp) => {
        console.log(resp.data.musician);
        
        localStorage.setItem('musician', JSON.stringify(resp.data.musician));
        props.history.push("/directory");
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="email" name="email" ref={register({ required: true})}/>
                <label>Password</label>
                <input type="password" name="password" ref={register({ required: true})}/>
                <Button type="submit">Confirm</Button>
                <Button type="reset">Reset</Button>
            </form>
        </div>
    )
}

export default Login;