import React from 'react';
import './priceplans.css';
import { Button } from '@mui/material';
function PricePlans() {
    return (<div className="card-container">
        <div className="card drop-shadow-2xl">
            <div className="card-header">
                <h2 className="text-xl font-medium">10 GB   - $5 / mo</h2>
                <div className="card-description">
                <div >
                <br />
                    <p> Ideal for casual users who want a simple and affordable solution for storing their photos. This plan offers a generous 10 GB of storage, ensuring you have enough space to securely keep your memories without breaking the bank.</p>
                </div>
                </div>
            </div>
            <Button  style={{backgroundColor:'#5561DD'}}  variant='contained'>Get started</Button>
        </div>
        <div className="card drop-shadow-2xl">
            <div className="card-header">
            <h2 className="text-xl font-medium">200 GB  - $25 / mo.</h2>
            <div >
            <br />
            <p>
            Perfect for photography enthusiasts and hobbyists, the Standard Plan provides a substantial 200 GB of storage space. This plan is designed to accommodate a larger collection of high-resolution photos, making it an excellent choice for those who love capturing moments in vivid detail.
            </p>
            </div>
            </div>
        <Button  style={{backgroundColor:'#5561DD'}} variant='contained'>Get started</Button>

        </div>
        <div className="card drop-shadow-2xl">
        <div className="card-header">
        <h2  className="text-xl font-medium">600 GB  - $45 / mo.</h2>
        <div >
        <br />
            <p>For users with a growing library of photos and videos, the Premium Plan offers an impressive 600 GB of storage. This plan is tailored for individuals or small businesses that require a more extensive storage capacity to store and organize a diverse range of multimedia content
                
            </p>
        </div>
        </div>
        <Button  style={{backgroundColor:'#5561DD'}} variant='contained'>Get started</Button>
        </div>
    </div>)
}

export default PricePlans;