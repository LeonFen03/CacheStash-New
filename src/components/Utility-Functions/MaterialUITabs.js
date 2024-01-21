import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs({ categoriesAvailable ,handleCategoryChange, category }) {
  const categories = [
    "Adventure",
    "Nature",
    "Urban",
    "Portraits",
    "Travel",
    "Stuff",
    "Events",
    "All"
];
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={category}
        onChange={handleCategoryChange}
      >
       {categories.map((name) => {
            return (<Tab value={`${name}`} disabled={!categoriesAvailable.has(name)} label={name} />); 
       })}
      </Tabs>
    </Box>
  );
}