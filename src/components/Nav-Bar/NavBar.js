import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
function NavBar () {
    return (<div><nav>
        <ul>
            <li>
                About
            </li>
            <li>
                Price plans
            </li>
            <li>
               Public Gallery
            </li>
            <li>Login <AccountCircle /></li>
        </ul>
    </nav>
    <Outlet />
    </div>)
}

export default NavBar;