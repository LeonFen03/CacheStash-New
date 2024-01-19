import './PhotoContainer.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
function PhotoContainer({photos, handleSearch, searchTerm}) {

    const photosFiltered = useMemo(() => {
        console.log(photos[0]);
        return photos.filter((object) => {
            const description = object.description;
            if (description !== null) {
                if (description.toLowerCase().includes(searchTerm.toLowerCase()) || photos.category !== undefined) {
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
            return <PhotoCard photo_url={img.urls.regular} name={img.user.username} avatar_url={img.user.profile_image.medium} description={img.description} category={img.category}/>
        })}
        </div>
    </div>)
}

export default PhotoContainer;