import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './PhotoGallery.css'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from '@mui/material';
import {TextField} from '@mui/material';
function PhotoGallery () {
    const [searchTerm,setSearchTerm] = useState('');
    function handleSearch (e) {
        setSearchTerm(e.target.value);
    }

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
        <PhotoContainer handleSearch={handleSearch} searchTerm={searchTerm} />
    </div>)
}
export default PhotoGallery;