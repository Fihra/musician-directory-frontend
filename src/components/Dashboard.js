import React, { useState, useEffect, useContext } from 'react';
import ProfileCard from './ProfileCard';
import Search from './Search';
import axios from 'axios';
import { Actions } from './Actions';
import { MusicianContext } from './MusicianContext';

const Dashboard = () => {
    const [data, setData ] = useState({ musicians: []})
    const musicianContext = useContext(MusicianContext);
    
    // useEffect( () => {
    //     getMusicians();
    //     musicianContext.musicianDispatch(Actions.FETCH_MUSICIANS);
        
    // }, [musicianContext])
    useEffect(() => {
        console.log(musicianContext);
    }, [musicianContext])

    // 'http://localhost:27017:/3001/musicians'
    // const getMusicians = () => {
    //     axios.get('http://localhost:3001/musicians')
    //     .then(response => setData({musicians: response.data}))
    //     .catch(error => console.log(error))
    // }

    const showMusicians = () => {
        return data.musicians.map((musician, i) => {
            return <ProfileCard key={i} musician={musician}/>
        })
    }

    return(

        <div className="dashboard-container">
            <Search/>
            {showMusicians()}
        </div>
    )
}

export default Dashboard;