import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { colors } from './colors'; 

function AboutPage() {
  return (
    <Box
      sx={{
        bgcolor: colors.background,
        color: colors.text,
        pt: 8,
        pb: 6,
        fontFamily: 'Gibson Light, sans-serif',
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="primary"
          gutterBottom
        >
          About Our App
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ fontFamily: 'Gibson Light, sans-serif' }}
        >
          Welcome to our app! Here, you'll find something extraordinary about the
          collection below—its contents, the creators, and the story behind it.
          We're here to make your experience memorable and enjoyable.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" color="primary">
            Discover More
          </Button>
          <Button variant="outlined" color="primary">
            Get Started
          </Button>
        </Stack>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          {/* should we use the logo here or another image? */}
          {/* <img
            src=""
            alt="About Our App"
            style={{ maxWidth: '100%', height: 'auto' }}
          /> */}
        </Box>
      </Container>
    </Box>
  );
}

export default AboutPage;

