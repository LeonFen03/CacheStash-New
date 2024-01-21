import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({ category, selectCategory }) {
    const options = [
        "Adventure",
        "Nature",
        "Urban",
        "Portraits",
        "Travel",
        "Stuff",
        "Events",
    ];

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        name="category"
        value={category}
        label="Category"
        onChange={selectCategory}
      >
        <MenuItem value="All">
          <em>All</em>
        </MenuItem>
        {options.map((option) => {
        return <MenuItem value={option}><em>{option}</em></MenuItem>
        })}
      </Select>
    </FormControl>
  );
}