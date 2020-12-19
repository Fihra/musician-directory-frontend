import React, { useState, useEffect, useContext } from 'react';
import { MusicianContext } from './MusicianContext';
import { Link } from 'react-router-dom'
import Auth from './Auth';
import Button from '@material-ui/core/Button';

const SideButtons = () => {
    const [musician, setMusician] = useState(false);
    const { musicianStorage, setMusicianStorage } = useContext(MusicianContext);

    const logout = () => {
        setMusician(false)
        // setMusicianStorage(null);
        localStorage.clear();

    }

    useEffect(() => {
        if(musicianStorage){
            setMusician(true);
        } 

    }, [musicianStorage])
    

    return(
        <div className="side-buttons">
            {musician ?<Link to="/edit-profile"><Button variant="contained">My Profile</Button></Link> : <Link to="/"><Button>Home</Button></Link>}
            {musician ?<Link to="/"><Button variant="contained" onClick={() => logout()}>Logout</Button></Link> : null}
            
        </div>
    )
    
}

export default SideButtons;