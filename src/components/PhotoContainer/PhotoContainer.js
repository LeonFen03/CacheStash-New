import './PhotoContainer.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
function PhotoContainer({sortedFiltered}) {
    console.log(sortedFiltered)
    return (<div className="photo-card-container">
        <div className="photo-gallery">
        {sortedFiltered.map((img) => {
            return <PhotoCard photo_url={img.urls.regular} name={img.user.username} avatar_url={img.user.profile_image.medium} description={img.description} category={img.category}/>
        })}
        </div>
    </div>)
}

export default PhotoContainer;