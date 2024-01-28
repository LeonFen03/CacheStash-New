import React from 'react';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useContext, useState } from "react"
import { TextField } from '@mui/material';
import { Button} from '@mui/material';
import { CurrentUser } from "../User/CurrentUser";
import { useNavigate } from "react-router";
import {motion} from 'framer-motion';
import { useCallback } from 'react';
import {Alert} from '@mui/material';
import './Login.css';
function Login () {
    const [error,setError] = useState({
      message:''
    })
    const [showPassword,setShowPassword] = useState(false);
    const { currentUser,setCurrentUser } = useContext(CurrentUser);
    const navigate = useNavigate();
    const [ credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
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
    useEffect(() => {
      if (currentUser.username !== '') {
        navigate('/')
      }
    },[])
    function handleClickShowPassword() {
        setShowPassword(!showPassword)
    }
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:4000/authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
    
        const data = await response.json()
    
        if (response.status === 200) {
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            handleError('Your email or password was incorrect')
        }
    },[credentials])
    return (<motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.7 }}
    > <div className="center center-login flex-col">
        <div className="login-box relative">
          <div className="absolute -top-10">
              {error.message ? <Alert severity="error">{error.message}</Alert> : ''}
          </div>
          <h1>Login</h1>
          <div className="login-form">
          <TextField
        style={{color:'black'}}
          required
          label="Email"
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        />
        <br />
          <OutlinedInput
            style={{color:'blue'}}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        <br />
  
        <br />
        <Button onClick={handleSubmit} style={{}} variant="contained">Submit</Button>
          </div>
        </div>
    </div></motion.span>)
}

export default Login;