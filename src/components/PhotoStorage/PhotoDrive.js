import { CurrentUser } from "../User/CurrentUser";
import { useState } from "react";
import { useContext } from "react";
import './PhotoDrive.css';
function PhotoDrive() {
    const {currentUser } = useContext(CurrentUser);
    const [searchTerm,setSearchTerm] = useState('');
    const [photos,setPhotos] = useState('');
    
    return (<div className="photodrive-container">
        <div className="user-title">
            <h2>Welcome, {currentUser.username}</h2>
        </div>
        <div className="user-photo-creator">

        </div>
    </div>)
}

export default PhotoDrive;