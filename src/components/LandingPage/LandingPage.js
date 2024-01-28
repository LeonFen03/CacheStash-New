import React from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Signup from '../Signup/Signup';
import './LandingPage.css';
import { useState } from 'react';
import { Alert } from '@mui/material';
function LandingPage () {
    const [success,setSuccess] = useState({
        message:''
    });
    const [error,setError] = useState({
        message:''
    });
    function handleError (message) {
        setError({
            message:message
        })
        setTimeout(() => {
            setError({
                message:''
            })
        },3000);
    }
    function handleSuccess (message) {
        setSuccess({
            message:message
        })
        setTimeout(() => {
            setSuccess({
                message:''
            })
        },3000);
    }
    return(<main className="landing-bg">
        <div className="brand-images">
            <div className="text-content">
                {/* <h1>ClickCache <AddAPhotoIcon style={{fontSize:'1.5em',color:'rgb(51, 128, 222)'}} /> </h1> */}
            </div>
        </div>
        <div className="sign-up-container ">
        {success.message ? <Alert severity="success">{success.message}</Alert> : ''}
            <div className="sign-up-box ">
                <Signup error={error} handleError={handleError} handleSuccess={handleSuccess}/>
            </div>
        </div>
    </main>)
}

export default LandingPage;