import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function MaterialUIChip ({ name}) {
  const categoryToColor = new Map([
    ["Adventure", "error"],
    ["Nature", "info"],
    ["Urban", "warning"],
    ["Portraits", "success"],
    ["Travel", "primary"],
    ["Stuff", "secondary"],
    ["Events", "primary"],
    ["All","primary"]
])

    return (
        <Stack style={{transform:'scale(1.3)'}} spacing={1} alignItems="center">
       <Stack direction="row" spacing={1}>
        <Chip className="xsm:scale-[0.7]" label={`${name}`} color={`${categoryToColor.get(name)}`}/>
    </Stack> 
  </Stack> )
}

export default MaterialUIChip;

