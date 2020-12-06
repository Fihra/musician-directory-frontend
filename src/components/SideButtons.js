import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Auth from './Auth';
import Button from '@material-ui/core/Button';

const SideButtons = () => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        if(isAuth){
            setIsAuth(localStorage.getItem("musician"));
        }
        
    }, []);

    const logout = () => {
        setIsAuth(null)
        Auth.logout(() => {
            localStorage.clear();

        })
    }
    
    console.log(isAuth)

    return(
        <div className="side-buttons">
            {/* {localStorage.getItem("musician") ?<Link to="/edit-profile"><button>My Profile</button></Link> : <Link to="/"><button>Home</button></Link>}
            {localStorage.getItem("musician") ?<Link to="/"><button onClick={() => logout()}>Logout</button></Link> : <Link to="/"><button>Login/Register</button></Link>} */}
            {isAuth !== null ?<Link to="/edit-profile"><Button variant="contained">My Profile</Button></Link> : <Link to="/"><Button>Home</Button></Link>}
            {isAuth !== null ?<Link to="/"><Button variant="contained" onClick={() => logout()}>Logout</Button></Link> : null}
            
        </div>
    )
    
}

export default SideButtons;