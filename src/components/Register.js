import React from 'react';
import { useForm }  from 'react-hook-form';
import axios from 'axios';

const Register = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/musicians', {
            email: data.email,
            password: data.password
        })
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>New Email</label>
                <input type="email" name="email" ref={register({ required: true})}/>
                {errors.email && (
                    <p>Email is required</p>
                )}
                <label>New Password</label>
                <input type="password" name="newPassword" ref={register({ required: true})}/>
                <label>Confirm Password</label>
                <input type="password" name="password" ref={register({ required: true})}/>
                {errors.password && (
                    <p>Passwords must match</p>
                )}
                <button type="submit">Confirm</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}

export default Register;