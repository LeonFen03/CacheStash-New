import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function MaterialUIChip ({ name, color }) {
    return (
        <Stack style={{transform:'scale(1.3)'}} spacing={1} alignItems="center">
       <Stack direction="row" spacing={1}>
        <Chip label={`${name}`} color={`${color}`}/>
    </Stack> 
  </Stack> )
}

export default MaterialUIChip;