import './PhotoContainer.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
function PhotoContainer({handleSearch, searchTerm}) {
    const [photos,setPhotos] = useState([])
    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=pJqzF8NAu8Yda5WIXH3cnDcLthV_cG7vCGfd3XHMaJo&per_page=20').then( async (photos) => {
            setPhotos(await photos.json());
        })
    },[])
    const photosFiltered = useMemo(() => {
        console.log(photos[0]);
        return photos.filter((object) => {
            const description = object.description;
            if (description !== null) {
                if (description.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true;
                }   
                return false;    
            }
            return true;
        })
    },[photos,searchTerm])
    return (<div className="photo-card-container">
        <div className="photo-gallery">
        {photosFiltered.map((img) => {
            return <PhotoCard photo_url={img.urls.regular} name={img.user.username} avatar_url={img.user.profile_image.medium} description={img.description}/>
        })}
        </div>
    </div>)
}

export default PhotoContainer;