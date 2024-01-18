import './PhotoContainer.css';
import { useEffect } from 'react';
import { useState } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
function photoRequest () {

}
function PhotoContainer() {
    const [photos,setPhotos] = useState([])
    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=pJqzF8NAu8Yda5WIXH3cnDcLthV_cG7vCGfd3XHMaJo&per_page=20').then( async (photos) => {
            setPhotos(await photos.json());
        })
    },[])
    return (<div className="photo-card-container">
        <div className="photo-gallery">
        {photos.map((img) => {
            return <PhotoCard photo_url={img.urls.regular} name={img.user.username} avatar_url={img.user.profile_image.medium} description={img.description}/>
        })}
        </div>
    </div>)
}

export default PhotoContainer;