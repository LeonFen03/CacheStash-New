import React from 'react';
import './priceplans.css';
import { Button } from '@mui/material';
function PricePlans() {
    return (<div className="card-container">
        <div className="card">
            <div className="card-header">
                <h2>10 GB   - $5 / mo</h2>
                <div className="card-description">
                <div className="overlay-card">
                    <p> Ideal for casual users who want a simple and affordable solution for storing their photos. This plan offers a generous 10 GB of storage, ensuring you have enough space to securely keep your memories without breaking the bank.</p>
                </div>
                </div>
            </div>
            <Button  variant='contained'>Get started</Button>
        </div>
        <div className="card">
            <div className="card-header">
            <h2>200 GB  - $25 / mo.</h2>
            <div className="overlay-card">
            <p>
            Perfect for photography enthusiasts and hobbyists, the Standard Plan provides a substantial 200 GB of storage space. This plan is designed to accommodate a larger collection of high-resolution photos, making it an excellent choice for those who love capturing moments in vivid detail.
            </p>
            </div>
            </div>
        <Button variant='contained'>Get started</Button>

        </div>
        <div className="card">
        <div className="card-header">
        <h2>600 GB  - $45 / mo.</h2>
        <div className="overlay-card">
            <p>For users with a growing library of photos and videos, the Premium Plan offers an impressive 600 GB of storage. This plan is tailored for individuals or small businesses that require a more extensive storage capacity to store and organize a diverse range of multimedia content
                
            </p>
        </div>
        </div>
        <Button variant='contained'>Get started</Button>
        </div>
        <div className="card">
        <div className="card-header">
        <h2>1 TB  -  $60  / mo.</h2>
        <div className="overlay-card">
        <p>Geared towards professionals and serious photographers, the Pro Plan provides a spacious 1 TB of storage. This ample storage capacity ensures that you can store, organize, and access your high-quality photos and videos without any compromise on resolution or quantity.</p>
        </div>
        </div>
        <Button variant='contained'>Get started</Button>
        </div>
        <div className="card">
        <div className="card-header">
        <h2>2 GB   - $120 / mo.</h2>

        <div className="overlay-card">
        <p>
        The Ultimate Plan is designed for power users and those with extensive multimedia needs. Offering a massive 2 TB of storage, this plan is perfect for users who demand the highest level of storage capacity and performance. Ideal for photographers, content creators, and businesses with large-scale media storage requirements.
        </p>
        </div>
        </div>
        <Button variant='contained'>Get started</Button>

        </div>
    </div>)
}

export default PricePlans;