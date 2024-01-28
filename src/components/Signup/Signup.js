import React from 'react';
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import {Button} from '@mui/material';
import './Signup.css'
import { useState } from 'react';
import { useEffect } from 'react';
function Signup () {
    const [profile,setProfile] = useState({
      email:'',
      username:'',
      password:''
  })
  useEffect(() => {
    console.log(profile);
  },[profile])
  async function handleSubmit (e) {
    e.preventDefault()
    console.log(profile)
    await fetch(`http://localhost:4000/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(profile)
		})

  }

    return (<div className="signup-container "> 
    <h2 className="">Sign up</h2>
    <div className="input-box">
        <TextField
        id="input-with-icon-textfield"
        label="Email"
        style={{maxWidth:'300px',width:'80%',minWidth:'300px',marginBottom:'30px'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setProfile((prev) => {
          return {...prev, 
          email: e.target.value
          }
        })}
      />
        </div>
        <div className="input-box">
        <TextField
        id="input-with-icon-textfield"
        label="Username"
        style={{maxWidth:'300px',width:'80%',minWidth:'300px',marginBottom:'30px'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setProfile((prev) => {
          return {...prev, 
          username: e.target.value
          }
        })}
      />
      </div>
      <div className="input-box">
      <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          style={{maxWidth:'300px',width:'80%',minWidth:'300px',marginBottom:'30px'}}
          onChange={(e) => setProfile((prev) => {
            return {...prev, 
            password: e.target.value
            }
          })}
        />
        </div>
        <div className="input-box">
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </div>
    </div>)
}

export default Signup;