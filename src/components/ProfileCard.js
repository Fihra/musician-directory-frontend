import React from 'react';

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

const ProfileCard = () => {
    
    const socialMediaLinks = {
        "Youtube": Youtube,
        "Twitter": Twitter,
        "Soundcloud": Soundcloud,
        "Twitch": Twitch,
        "Spotify": Spotify,
        "Bandcamp": Bandcamp,
        "Instagram": Instagram,
        "Website": Website
    }

    const showSocialMedia = () => {
        return Object.entries(socialMediaLinks).map(([key, value]) => {
            return <li><img src={value} alt={key}/></li>
        })
    }

    return(
        <div className="profile-container">
            <div className="profile-image">
                
                <div className="name-detail">
                    <p>Name</p>
                    <p>Alias</p>
                    {/* <p>Email</p> */}
                </div>
                <div className="img-holder">
                    <img src={BlankAvatar} alt="Self"/>
                </div>
                <button className="contact-btn">Copy Email to Clipboard</button>
            <button className="contact-btn"> Save to Contact Later</button>
            </div>
            <div className="all-detail">
                <p>Instrument(s):</p>
                <p>Voice Range:</p>
                <p>Production Skills:</p>
                <p> Audio Gear:</p>
                <p>Other Skills:</p>
                <p>Misc:</p>
                <p>Registered on Projects:</p>
            </div>
            
            <div className="sample-container">

            <div className="samples">
                <div className="sample-holder">
                        Sample #1
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