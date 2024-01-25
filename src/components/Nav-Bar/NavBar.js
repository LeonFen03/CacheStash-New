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
import ResponsiveAppBar from '../Utility-Functions/NavigationBarMenu';
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
        setCurrentUser({username:''});
        localStorage.setItem('token', null);
        
    }
    const pages = ['about','photodrive','priceplans','public','login'];

    useEffect(() => {

    },[currentUser])
    
    return (<div>
        <ResponsiveAppBar logout={logout} pages={pages} />
    <Outlet />
    </div>)
}

export default NavBar;