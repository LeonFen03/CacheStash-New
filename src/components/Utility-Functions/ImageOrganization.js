import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList({images}) {
  return (
    <Box sx={{ maxWidth: 1400, width:'100%', height: 700}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item,i) => (
          <ImageListItem key={i}>
            {item}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
