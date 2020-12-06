import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

//Social Media Buttons
import Youtube from '../assets/youtube.png';
import Twitter from '../assets/twitter.png';
import Soundcloud from '../assets/soundcloud.png';
import Twitch from '../assets/twitch.png';
import Spotify from '../assets/spotify.png';
import Bandcamp from '../assets/bandcamp.png';
import Email from '../assets/gmail.png';
import Instagram from '../assets/instagram.png';
import BlankAvatar from '../assets/blank_avatar.png';
import Website from '../assets/website.png';

const socialMediaLinks = {
    "Youtube": {
        logo: Youtube,
    },
    "Twitter": {
        logo: Twitter,
    },
    "Soundcloud": {
        logo: Soundcloud,
    },
    "Twitch": {
        logo: Twitch,
    },
    "Spotify": {
        logo: Spotify,
    },
    "Bandcamp": {
        logo: Bandcamp,
    },
    "Instagram": {
        logo: Instagram,
    },
    "Website": {
        logo: Website,
    }
}

const mySocialMedia = {};

const ProfileCard = (props) => {
    const [details, setDetails] = useState(null);
    const [socialMedia, setSocialMedia] = useState(mySocialMedia)
    useEffect(() =>{
        setDetails(props.musician);

        const {youtube, twitter, soundcloud, twitch, bandcamp, instagram, website} = props.musician;

        setSocialMedia({
            ...mySocialMedia,
            "Youtube": youtube,
            "Twitter": twitter,
            "Soundcloud": soundcloud,
            "Twitch": twitch,
            "Bandcamp": bandcamp,
            "Instagram": instagram,
            "Website": website
        })
        console.log(details);
    }, [])

    const showSocialMedia = () => {
        return Object.entries(socialMedia).map(([key, value], i) => {
            if(value !== "N/A" || value !== ""){
                return <li key={i}><a href={value}><img src={socialMediaLinks[key].logo} alt={key}/></a></li>
            }

            // return console.log(key, value)
        })

    }

    return(
        <div className="profile-container">
            <div className="profile-image">
                
                <div className="name-detail">
                    {details === null ? <p>Name</p> : <p>{details.name}</p>}
                    {details === null ? null : <p>{details.alias}</p>}
                    {details === null ? null : <p>{details.email}</p>}
                </div>
                <div className="img-holder">
                    <img src={BlankAvatar} alt="Self"/>
                </div>
                <button className="contact-btn">Copy Email to Clipboard</button>
            <button className="contact-btn"> Save to Contact Later</button>
            </div>
            <div className="all-detail">
                <p>Instrument(s): {details === null ? null : details.instrument }</p>
                <p>Voice Range:</p>
                <p>Production Skills:{details === null ? null : details.productionSkills }</p>
                <p> Audio Gear: {details === null ? null : details.audioGear }</p>
                <p>Other Skills:</p>
                <p>Misc:</p>
            </div>
            
            <div className="sample-container">

            <div className="samples">
                <div className="sample-holder">
                        {details === null ? "Sample #1" : <iframe className="video-player" src={details.sample1} title="sample 1"/>}
                    </div>
                    <div className="sample-holder">
                        Sample #2
                    </div>
            </div>
                
            </div>
            {/* <div className="break"></div> */}
            <div className="social-media-links">
                <ul>
                    {showSocialMedia()}
                </ul>
            </div>
                
        </div>
    )
}

export default ProfileCard;