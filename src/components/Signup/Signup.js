import React from 'react';
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import {Button} from '@mui/material';
import './Signup.css'
import { useState } from 'react';
import { useEffect } from 'react';
import {Alert} from '@mui/material';
import validator from "validator";
function Signup ({ handleError, handleSuccess, error }) {
  
    const [profile,setProfile] = useState({
      email:'',
      username:'',
      password:''
  })
  const UsernameRegex = /^[a-z][^\W_]{7,14}$/i;
  const PasswordRegex = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/

  async function handleSubmit2 (e) {
    e.preventDefault()
    if (!validator.isEmail(profile.email) || !profile.email) {
      handleError('Choose Another Email, it must fit within the requirements');
      return;
    } else if (!PasswordRegex.test(profile.password) || !profile.email) {
      handleError('Your password word must fit within the parameters');
      return;
    } else if (!UsernameRegex.test(profile.username) || !profile.email) {
      handleError('Your username needs to fit within the standards');
      return;
    }
    const success = await fetch(`http://localhost:4000/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(profile)
		})
    await success.json().then((resolved) => {
        handleSuccess('Successfully created User');
    })
    .catch(() => {

    })

  }

    return (<div className="signup-container relative"> 
    <h2 >Sign up</h2>
    <div className="absolute -top-10">
    {error.message ? <Alert severity="error">{error.message}</Alert> : ''}
    </div>
    <div style={{display: !error.message ? 'None' : 'block'}} className=" absolute w-[300px] -top-[350px] 2xs:sm:-top-[350px]  md:-left-[310px] bg-white  border-black border-2 p-4 rounded-xl">
  <p className="text-red-500"> 1. Length: The password must be between 5 to 20 characters long.</p>
 <p className="text-red-500">2. Lowercase Letters: At least one lowercase letter must be included.</p>
 <p className="text-red-500">3. Digits: At least one digit must be included.</p>
 <p className="text-red-500">4. Restricted Characters: The password must not contain the following characters: colon (:), ampersand (&), period (.), tilde (~), or any whitespace characters (spaces, tabs, etc.).</p>
    </div>
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
            <Button onClick={handleSubmit2} variant="contained">Submit</Button>
        </div>
    </div>)
}

export default Signup;