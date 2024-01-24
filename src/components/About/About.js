import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { colors } from './colors'; 
import { Link } from 'react-router-dom'

function About() {
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

Welcome to CacheStash, an innovative platform designed to elevate your file management experience. CacheStash serves as your premier destination for storing, organizing, and sharing files seamlessly. Effortlessly store and access your images from any device, ensuring convenience and accessibility.

Embark on your journey by creating a complimentary profile, empowering you to efficiently manage and store your images with ease. Elevate your file storage experience with CacheStash – where professionalism meets practicality. Sign up today and unlock a world of streamlined file management.        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
            <Link to="/priceplans">
          <Button variant="contained" color="primary">
            Pricing Info
          </Button>
          </Link>
          <Link to="/">
          <Button variant="outlined" color="primary">
            Get Started
          </Button>
          </Link>
          {/* might need to fix routes for these */}
        </Stack>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          {/* should we use the logo here or another image? */}
          {/* <img
            src="./placeholder_images/balloon-bg.png" 
            alt="Balloon Logo"
            style={{ maxWidth: '100%', height: 'auto' }}
          /> */}
        </Box>
      </Container>
    </Box>
  );
}

export default About;