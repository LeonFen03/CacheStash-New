import React from 'react';
import './priceplans.css';
import { Button } from '@mui/material';
function PricePlans() {
    return (<div className="card-container">
        <div className="card">
            <p>10 GB   - $5 / mo.</p>
            <Button  variant='contained'>Get started</Button>
        </div>
        <div className="card">
        <p>200 GB  - $25 / mo.</p>
        <Button variant='contained'>Get started</Button>
        </div>
        <div className="card">
        <p>600 GB  - $45 / mo.</p>
        <Button variant='contained'>Get started</Button>
        </div>
        <div className="card">
        <p>1 TB  -  $60  / mo.</p>
        <Button variant='contained'>Get started</Button>
        </div>
        <div className="card">
        <p>10 GB   - $5 / mo.</p>
        <Button variant='contained'>Get started</Button>
        </div>
    </div>)
}

export default PricePlans;