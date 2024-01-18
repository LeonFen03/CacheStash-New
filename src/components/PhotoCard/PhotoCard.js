import React from 'react';
import './PhotoCard.css';
import { Avatar } from '@mui/material';
function PhotoCard ({ photo_url, name, avatar_url, description }) {
    return (<div className="image-container">
        <img src={photo_url}/>
        <div className="overlay">
            <div className="user-header">
            <Avatar style={{width:'60px',height:'60px'}}  src={avatar_url}/>
            <p > {name} </p>
            </div>
            <p> {description}  </p>
            <p><u>Click to view full image</u></p>
        </div>
    </div>)
}

export default PhotoCard;