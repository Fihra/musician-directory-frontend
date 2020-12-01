import React from 'react';

const Home = () => {
    return(
        <div>
            <form>
                <label>Email</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
                <button type="submit">Confirm</button>
            </form>
            <button>Login</button>
            <button>Register</button>
        </div>
    )
}

export default Home;