import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useContext } from 'react';
import { CurrentUser } from '../User/CurrentUser';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({ pages, logout }) {
  const { currentUser} = useContext(CurrentUser);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{backgroundColor:'#7c9985'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink style={{display:'flex'}} to="/">
          <CameraAltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) =>  {
                if (currentUser.username === '' && page === 'photodrive') {
                    return '';
                }
              return (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink    to={`/${page}`}><Button style={{color:'black'}}><Typography textAlign="center">{page}</Typography></Button></NavLink>
                </MenuItem>
            )})}
            </Menu>
          </Box>
          <NavLink style={{color:'white',textDecoration:'none'}} to='/'><CameraAltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /></NavLink>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
            if (currentUser.username === '' && page === 'photodrive') {
                    return '';
            }
              return (<Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink style={{color:'white',textDecoration:'none'}} to={`/${page}`}> {page}</NavLink>
              </Button>
            )
              })}
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            {currentUser.username !== '' ? <div style={{display:'flex',alignItems:'center'}}>
            <Avatar style={{margin:'10px'}} src='' />
              {currentUser.username !== '' ? currentUser.username : ''}
              <Button onClick={logout} style={{color:'white'}}>Sign out</Button>
            </div>
: ''}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;