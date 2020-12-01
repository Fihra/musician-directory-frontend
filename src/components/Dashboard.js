import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData ] = useState({ musicians: []})
    console.log(data);
    
    useEffect( () => {
        getMusicians();
        
        
    }, [])

    // 'http://localhost:27017:/3001/musicians'
    const getMusicians = () => {
        axios.get('http://localhost:3001/musicians')
        .then(response => setData({musicians: response.data}))
        .catch(error => console.log(error))
    }

    const showMusicians = () => {
        return data.musicians.map((musician, i) => {
            return <ProfileCard key={i} musician={musician}/>
        })
    }

    return(

        <div className="dashboard-container">
            {/* <ProfileCard/> */}
            {showMusicians()}
        </div>
    )
}

export default Dashboard;