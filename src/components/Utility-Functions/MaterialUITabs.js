import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs({ categories ,handleCategoryChange,category }) {

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={category}
        onChange={handleCategoryChange}
        textColor="rgb(15, 39, 71)"
      >
       {categories.map((name, index) => {
            return (<Tab value={`${name[0]}`} label={name[0]} />); 
       })}
      </Tabs>
    </Box>
  );
}