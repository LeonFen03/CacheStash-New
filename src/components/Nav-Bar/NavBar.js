import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './NavBar.css'
function NavBar () {
    return (<div><nav className="main-nav">
        <ul className="nav-container">
            <li >
                About
            </li>
            <li>
                Price plans
            </li>
            <li>
               Public Gallery
            </li>
            <li style={{display:'flex',alignItems:'center'}}>Login <AccountCircle /></li>
        </ul>
    </nav>
    <Outlet />
    </div>)
}

export default NavBar;