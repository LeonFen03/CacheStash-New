import React from 'react';
import { Outlet } from 'react-router-dom';
function NavBar () {
    return (<div><nav>
        <ul>
            <li>

            </li>
        </ul>
    </nav>
    <Outlet />
    </div>)
}

export default NavBar;