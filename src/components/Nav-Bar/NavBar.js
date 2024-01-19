import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './NavBar.css'
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../User/CurrentUser';
import { useContext } from 'react';
import { Button } from '@mui/material';
function NavBar () {
    const navigate = useNavigate();
    const {currentUser, setCurrentUser} = useContext(CurrentUser);
    function clickEvent () {
        navigate('/')

    }
    function logout () {
        if (currentUser !== null) {
            navigate('/');
        }
        setCurrentUser(null);
        localStorage.setItem('token', null);
        
    }
    useEffect(() => {

    },[currentUser])
    
    return (<div><nav className="main-nav">
        <div className="logo">
            <h2  onClick={clickEvent}  >CacheStash <AddAPhotoIcon style={{fontSize:'1.3em'}}/></h2>
        </div>
        <ul className="nav-container">
            <li >
                About
            </li>
            {currentUser ? <li>  <NavLink className="nav-links-class" to="/photodrive">PhotoDrive</NavLink></li> : ''}
            <li>
                Price plans
            </li>
            <li>
              <NavLink className="nav-links-class" to="/public"> Public Gallery</NavLink>
            </li>
            <li  onClick={() => navigate('/login')} style={{display:'flex',alignItems:'center'}}> {currentUser ? currentUser.username : 'Login'} <AccountCircle /> </li>
            <li><Button onClick={logout}>Sign out</Button></li>
        </ul>
    </nav>
    <Outlet />
    </div>)
}

export default NavBar;