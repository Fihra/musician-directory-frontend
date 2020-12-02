import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Home = () => {
    const [ isLogin, setIsLogin ] = useState(true);

    return(
        <div className="home-container">
            {isLogin ? <Login/> : <Register/>}
            
            <button onClick={() => setIsLogin(true)}>Login</button>
            <button onClick={() => setIsLogin(false)}>Register</button>
        </div>
    )
}

export default Home;