import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

export default function BasicSelect({categories, handleCategoryChange}) {
categories = [...categories]
const [category,setCategory] = useState('All');

function handleCategory(e) {
    setCategory(e.target.value);
    handleCategoryChange(e,e.target.value);
  }
  const c =  [["Adventure", "error"],
  ["Nature", "info"],
  ["Urban", "warning"],
  ["Portraits", "success"],
  ["Travel", "primary"],
  ["Stuff", "secondary"],
  ["Events", "primary"],
  ["All","primary"]]
  const colorMap = {
    "Adventure":"red",
    "Travel": "blue",
    "Portraits":"green",
    "Urban":"orange",
    "Stuff":"purple",
    "Nature": "blue"
}
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value= {category}
          label="Category"
          onChange={handleCategory}
        >
         {categories.map((tab) => {
          return <MenuItem value={`${tab}`}>{tab}</MenuItem>
        })} 
        </Select>
      </FormControl>
    </Box>
  );
}