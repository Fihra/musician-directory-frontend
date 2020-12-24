import React, { useState, useEffect, useContext } from 'react';
import ProfileCard from './ProfileCard';
import Search from './Search';
import axios from 'axios';
import { Actions } from './Actions';
import { MusicianContext } from './MusicianContext';

const Dashboard = () => {
    const [data, setData ] = useState(null)
    const musicianContext = useContext(MusicianContext);
    
    useEffect(() => {
        setData(musicianContext.musicianData.allMusicians);
    }, [musicianContext])

    // 'http://localhost:27017:/3001/musicians'
    // const getMusicians = () => {
    //     axios.get('http://localhost:3001/musicians')
    //     .then(response => setData({musicians: response.data}))
    //     .catch(error => console.log(error))
    // }

    const showMusicians = () => {
            return data.map((musician, i) => {
                return <ProfileCard key={i} musician={musician}/>
            })
    }
    console.log(data);
    return(

        <div className="dashboard-container">
            <Search/>
            {data ? showMusicians() : 'data does not exist'}
        </div>
    )
}

export default Dashboard;