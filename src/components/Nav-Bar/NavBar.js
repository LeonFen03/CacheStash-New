import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './NavBar.css'
import { useNavigate } from 'react-router-dom';
function NavBar () {
    const navigate = useNavigate();
    function clickEvent () {
        navigate('/')

    }
    return (<div><nav className="main-nav">
        <div className="logo">
            <h2  onClick={clickEvent}  >CacheStash <AddAPhotoIcon style={{fontSize:'1.3em'}}/></h2>
        </div>
        <ul className="nav-container">
            <li >
                About
            </li>
            <li>
                Price plans
            </li>
            <li>
              <NavLink to="/public"> Public Gallery</NavLink>
            </li>
            <li style={{display:'flex',alignItems:'center'}}>Login <AccountCircle /></li>
        </ul>
    </nav>
    <Outlet />
    </div>)
}

export default NavBar;