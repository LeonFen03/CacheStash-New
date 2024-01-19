import './SearchBarAndFilter.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from '@mui/material';
import ColorTabs from '../Utility-Functions/MaterialUITabs';
import { useMemo, useState,useEffect } from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
function SearchBarAndFilter({photos}) {
  const [category,setCategory] = useState('All')
  const [sorted,setSorted] = useState([])
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
    ["Stuff", "secondary"],
    ["Events", "primary"],
    ["All"]
];
  useEffect(() => {
    setSorted((prev) => {
        return photos.filter((photo) => {
          if (category === 'All') {
            return true;
          }
          return photo.category[0] === category;
        });
    })

  },[photos,category])


    return (
      <div  className="gallery-container">
        <div className="gallery-search">
      <div className="search-bar">
         <TextField
        id="input-with-icon-textfield"
        label="TextField"
        onChange={handleSearch}
        style={{width:'300px'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div>
        <ColorTabs category={category} setCategory={setCategory} categories={categoriesWithColorTypes} />
      </div>
    </div>
    </div>
    <PhotoContainer  searchTerm={searchTerm} sorted={sorted}/>
    </div>)
}
export default SearchBarAndFilter;