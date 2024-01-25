import './PhotoContainer.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import PaginationRanges from '../Utility-Functions/Pagination';
import MasonryImageList from '../Utility-Functions/ImageOrganization';
import MaterialUIChip from '../Utility-Functions/MaterialUIChipComponent';
function PhotoContainer({sortedFiltered, numOfPages, turnPage, category}) {
    return (<div className="photo-card-container">
        <div className="page-section">
            <PaginationRanges numOfPages={numOfPages} turnPage={turnPage} />
        </div>
        <div className="photo-gallery">
        <MasonryImageList images={sortedFiltered.map((img) => {
            return <PhotoCard title={img.title} photo_url={img.image_url} name={img.user_name} avatar_url={img.avatar_url} description={img.description} category={img.category} id={img._id}/>
        })} />
        {!sortedFiltered.length ? 'You have no photos' : ''}
        </div>
    </div>)
}

export default PhotoContainer;

