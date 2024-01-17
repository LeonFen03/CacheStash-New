import React from 'react';
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import {Button} from '@mui/material';
import './Signup.css'
function Signup () {
    return (<div className="signup-container"> 
    <h2>Sign up</h2>
    <div className="input-box">
        <TextField
        id="input-with-icon-textfield"
        label="Email"
        style={{maxWidth:'400px',width:'90%',minWidth:'300px',marginBottom:'30px'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
        </div>
        <div className="input-box">
        <TextField
        id="input-with-icon-textfield"
        label="Username"
        style={{maxWidth:'400px',width:'90%',minWidth:'300px',marginBottom:'30px'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </div>
      <div className="input-box">
      <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          style={{maxWidth:'400px',width:'90%',minWidth:'300px',marginBottom:'30px'}}
        />
        </div>
        <div className="input-box">
            <Button variant="contained">Submit</Button>
        </div>
    </div>)
}

export default Signup;