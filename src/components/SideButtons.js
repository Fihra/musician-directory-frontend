import React, { useState, useEffect, useContext } from 'react';
import { MusicianContext } from './MusicianContext';
import { Link, useLocation } from 'react-router-dom'
import Auth from './Auth';
import Button from '@material-ui/core/Button';
import { Actions } from './Actions';

const SideButtons = (props) => {
    const [musician, setMusician] = useState(false);
    const { musicianData } = useContext(MusicianContext);
    const musicianContext = useContext(MusicianContext);
    const location = useLocation();

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
    
    const showEditOrDirectoryButton = () => {
        let myLocation = location.pathname;
        console.log(myLocation);

        if(musician){
            if(myLocation === "/edit-profile"){
                return <Link to="/directory"><Button variant="contained">Directory</Button></Link>
            } else {
                return <Link to="/edit-profile"><Button variant="contained">My Profile</Button></Link>
            }
        } else {
            return <Link to="/"><Button>Home</Button></Link>
        }
    }

    return(
        <div className="side-buttons">
            {showEditOrDirectoryButton()}

            {/* {musician ?<Link to="/edit-profile"><Button variant="contained">My Profile</Button></Link> : <Link to="/"><Button>Home</Button></Link>} */}
            {musician ?<Link to="/"><Button variant="contained" onClick={() => logout()}>Logout</Button></Link> : null}
            
        </div>
    )
    
}

export default SideButtons;