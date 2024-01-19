import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRanges({ numOfPages, turnPage }) {
  return (
    <Stack style={{transform:'scale(1.4)',margin:'20px'}} spacing={2}>
      <Pagination count={numOfPages} defaultPage={1} siblingCount={0} onChange={turnPage} />
    </Stack>
  );
}