import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Button from '@material-ui/core/Button';

const Home = (props) => {
    const [ isLogin, setIsLogin ] = useState(true);

    return(
        <div className="home-container">
            {isLogin ? <Login {...props}/> : <Register {...props}/>}
            
            <Button variant="contained" onClick={() => setIsLogin(true)}>Login</Button>
            <Button variant="contained" onClick={() => setIsLogin(false)}>Register</Button>
        </div>
    )
}

export default Home;