import React from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Signup from '../Signup/Signup';
import './LandingPage.css';
function LandingPage () {
    return(<main className="landing-bg">
        <div className="brand-images">
            <div className="text-content">
                {/* <h1>ClickCache <AddAPhotoIcon style={{fontSize:'1.5em',color:'rgb(51, 128, 222)'}} /> </h1> */}
            
            </div>
        </div>
        <div className="sign-up-container">
            <div className="sign-up-box">
                <Signup />
            </div>
        </div>
    </main>)
}

export default LandingPage;