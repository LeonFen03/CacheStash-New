import './SearchBarAndFilter.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from '@mui/material';
import ColorTabs from '../Utility-Functions/MaterialUITabs';
import { useMemo, useState,useEffect } from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
const pagesConverter  = (items,numOfPages = 2) => {
  let pageIndex = 0;
  const pagesArray = [[]];
  if (!items.length) return [[]];
  items.forEach((item,index) => {
    if ((index+1) % numOfPages === 0) {
      pageIndex++
      pagesArray[pageIndex] = [];
      pagesArray[pageIndex].push(item)
    }   else {
      pagesArray[pageIndex].push(item)
    }
    
  })
  return  pagesArray;
}
function SearchBarAndFilter({photos}) {
  const [category,setCategory] = useState('All')
  const [sorted,setSorted] = useState([])
  const [pageNumber,setPageNumber] = useState(0);
  const [searchTerm,setSearchTerm] = useState('');
  function turnPage(event,value ) {
    setPageNumber(value-1);
  }
  function handleSearch (e) {
        setSearchTerm(e.target.value);
  } 
  const handleCategoryChange = (event, newValue) => {
    setPageNumber(0);
    setCategory(newValue);
  };
  function grabAllCategories (list) {
      const ListOfAllCategories = new Set(['All']);
      if (!list.length) return new Set();
      list.forEach((photo) => {
        ListOfAllCategories.add(photo.category[0]);
      })
  return ListOfAllCategories;
  }
  const categoriesWithColorTypes = useMemo(() => {
    return grabAllCategories(photos);
  },[photos]) 

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

  const sortedFiltered = useMemo(() => {

      let allpages = pagesConverter(sorted.filter((object) => {
        const description = object.description;
        if (description !== null && description !== undefined) {
            if (description.toLowerCase().includes(searchTerm.toLowerCase()) || sorted.category !== undefined) {
                return true;
            }   
            return false;    
        }
        return true;
    }),10);

      return allpages;

  },[sorted,searchTerm,pageNumber])


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
        <ColorTabs category={category}  handleCategoryChange={handleCategoryChange} categoriesAvailable={categoriesWithColorTypes} />
      </div>
    </div>
    </div>
    <PhotoContainer sortedFiltered={sortedFiltered[pageNumber]} numOfPages={sortedFiltered.length} pageNumber={pageNumber} turnPage={turnPage} />
    
    </div>)
}
export default SearchBarAndFilter;