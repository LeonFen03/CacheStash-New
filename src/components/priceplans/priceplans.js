import React from 'react';
import './priceplans.css';
import { Button } from '@mui/material';
function PricePlans() {
    return (<div className="card-container">
        <div className="card">
            <p>10 GB   - $5 / mo.</p>
        </div>
        <div className="card">
        <p>200 GB  - $25 / mo.</p>
        </div>
        <div className="card">
        <p>600 GB  - $45 / mo.</p>
        </div>
        <div className="card">
        <p>1 TB  -  $60  / mo.</p>
        </div>
        <div className="card">
        <p>12 TB  -  $120  / mo.</p>
        </div>
    </div>)
}

export default PricePlans;