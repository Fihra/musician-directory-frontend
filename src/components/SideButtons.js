import React, { useState, useEffect, useContext } from 'react';
import { MusicianContext } from './MusicianContext';
import { Link } from 'react-router-dom'
import Auth from './Auth';
import Button from '@material-ui/core/Button';

const SideButtons = () => {
    const [musician, setMusician] = useState(null);
    const { musicianStorage, setMusicianStorage } = useContext(MusicianContext);

    const logout = () => {
        // setMusician(null)
        // setMusicianStorage(null);
        localStorage.clear();

    }
    console.log(musicianStorage);

    return(
        <div className="side-buttons">
            {/* {localStorage.getItem("musician") ?<Link to="/edit-profile"><button>My Profile</button></Link> : <Link to="/"><button>Home</button></Link>}
            {localStorage.getItem("musician") ?<Link to="/"><button onClick={() => logout()}>Logout</button></Link> : <Link to="/"><button>Login/Register</button></Link>} */}
            {musicianStorage ?<Link to="/edit-profile"><Button variant="contained">My Profile</Button></Link> : <Link to="/"><Button>Home</Button></Link>}
            {musicianStorage ?<Link to="/"><Button variant="contained" onClick={() => logout()}>Logout</Button></Link> : null}
            
        </div>
    )
    
}

export default SideButtons;