import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { colors } from './colors'; 
import { Link } from 'react-router-dom'

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
          Welcome to CacheStash a little project thats helping you out in a big way! CacheStash is your new location for storing files. You can easily store, sort, and share your images to access anytime on any device!
          To get started simply sign up for a free profile and start storing your images today!
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
            <Link to="/LandingPage">
          <Button variant="contained" color="primary">
            Home
          </Button>
          </Link>
          <Link to="SignUp">
          <Button variant="outlined" color="primary">
            Get Started
          </Button>
          </Link>
          {/* might need to fix routes for these */}
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

