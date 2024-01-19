import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './PhotoGallery.css'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from '@mui/material';
import {TextField} from '@mui/material';
import { useEffect } from 'react';
function PhotoGallery () {
    const [searchTerm,setSearchTerm] = useState('');
    function handleSearch (e) {
        setSearchTerm(e.target.value);
    }
    const categoriesWithColorTypes = [
        ["Adventure", "error"],
        ["Nature", "info"],
        ["Urban", "warning"],
        ["Portraits", "success"],
        ["Travel", "primary"],
        ["Food", "secondary"],
        ["Events", "default"]
    ];

    
    const [photos,setPhotos] = useState([])
    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=pJqzF8NAu8Yda5WIXH3cnDcLthV_cG7vCGfd3XHMaJo&per_page=20').then( async (photos) => {
            setPhotos((await photos.json()).map((object) => {
                return {
                    ...object,
                    "category": categoriesWithColorTypes[Math.floor(Math.random()*categoriesWithColorTypes.length)]
                };
            }));
        })
    },[])

    return (<div  className="gallery-container">
        <div className="gallery-search">
        <TextField
        id="input-with-icon-textfield"
        label="TextField"
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />

        </div>
        <PhotoContainer handleSearch={handleSearch} searchTerm={searchTerm} photos={photos}/>
    </div>)
}
export default PhotoGallery;