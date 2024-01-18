import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './PhotoGallery.css'
import { useState } from 'react';
import { Input } from '@mui/material';
function PhotoGallery () {
    const [searchTerm,setSearchTerm] = useState('');
    function handleSearch (e) {
        setSearchTerm(e.target.value);
    }

    return (<div  className="gallery-container">
        <div className="gallery-search">
        <Input onChange={handleSearch} placeholder="Search photo"  />
        </div>
        <PhotoContainer handleSearch={handleSearch} searchTerm={searchTerm} />
    </div>)
}
export default PhotoGallery;