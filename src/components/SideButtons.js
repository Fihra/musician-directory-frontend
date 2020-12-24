import React, { useState, useEffect, useContext } from 'react';
import { MusicianContext } from './MusicianContext';
import { Link } from 'react-router-dom'
import Auth from './Auth';
import Button from '@material-ui/core/Button';
import { Actions } from './Actions';

const SideButtons = () => {
    const [musician, setMusician] = useState(false);
    // const { musicianStorage, setMusicianStorage } = useContext(MusicianContext);
    const { musicianData } = useContext(MusicianContext);
    const musicianContext = useContext(MusicianContext);

    const logout = () => {
        setMusician(false)
        localStorage.clear();
        musicianContext.musicianDispatch({type: Actions.LOGOUT})
    }

    useEffect(() => {
        if(localStorage.getItem("musician") !== null){
            setMusician(true);
        }
    }, [])

    useEffect(() => {
        if(localStorage.getItem("musician") !== null){
            setMusician(true);
        } 

    }, [musicianData.currentMusician])
    console.log(musicianData);
    // console.log("MusicianStorage:", musicianStorage);
    return(
        <div className="side-buttons">
            {/* {musicianData.currentMusician !== null ?<Link to="/edit-profile"><Button variant="contained">My Profile</Button></Link> : <Link to="/"><Button>Home</Button></Link>}
            {musicianData.currentMusician !== null ?<Link to="/"><Button variant="contained" onClick={() => logout()}>Logout</Button></Link> : null} */}
            {musician ?<Link to="/edit-profile"><Button variant="contained">My Profile</Button></Link> : <Link to="/"><Button>Home</Button></Link>}
            {musician ?<Link to="/"><Button variant="contained" onClick={() => logout()}>Logout</Button></Link> : null}
            
        </div>
    )
    
}

export default SideButtons;