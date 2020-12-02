import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Home = (props) => {
    const [ isLogin, setIsLogin ] = useState(true);

    return(
        <div className="home-container">
            {isLogin ? <Login {...props}/> : <Register {...props}/>}
            
            <button onClick={() => setIsLogin(true)}>Login</button>
            <button onClick={() => setIsLogin(false)}>Register</button>
        </div>
    )
}

export default Home;