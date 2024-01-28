import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import './UploadImageTab.css';
import LinearIndeterminate from "../Utility-Functions/LinearIndeterminate";
import { Button } from "@mui/material";
import { useMemo,useRef } from "react";
import { CurrentUser } from "../User/CurrentUser";
import { useContext } from "react";
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css'; // Import basic Dropzone styles
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import SelectSmall from "../Utility-Functions/MaterialUISelectComponent";
import { useCallback } from "react";
import {Alert} from "@mui/material";
import Switch from '@mui/material/Switch';
import { Label } from "@mui/icons-material";
Dropzone.autoDiscover = false;
function UploadImageTab() {
    const [error,setError] = useState({
        message:''
    });
    const {currentUser} = useContext(CurrentUser);
    const [image,setImage] = useState({
        title:'',
        description:'',
        public:false,
        category:''
    });
    function onChecked(e) {
        setImage((prev) => {
            return {
                ...prev,
                public:e.target.checked,
            }
        });
    }
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
    function handleChange (e) {
        const {name, value} = e.target;
        setImage((prev) => ({
            ...prev,
            [name]:value
        }))
    }
    const appendFormData = useCallback((formData) => {
        formData.append("user_id", currentUser._id);
        formData.append("user_name", currentUser.user_name);
        Object.keys(image).forEach(key => {
            formData.append(key, image[key]);
        });
    },[image])
    const dropzoneRef = useRef(null);
    useEffect(() => {
        if (dropzoneRef.current) {
            const dz = new Dropzone(dropzoneRef.current, {
                url: 'http://localhost:4000/upload',
                autoProcessQueue: false
            });
    
            dz.on("sending", function(file, xhr, formData) {
                if (file.formData) {
                    for (let [key, value] of file.formData.entries()) {
                        formData.append(key, value);
                    }
                }
            });
    
            dz.on("success", function(file, response) {
                setImage({
                    title: '',
                    description: '',
                    category: ''
                });
            });
    
            // Cleanup function
            return () => {
                if (dz) {
                    dz.off("sending");
                    dz.off("success");
                    dz.destroy();
                }
            };
        }
    }, []);
    const handleUpload = useCallback(() => {
        if (!image.title || !image.category) {
            handleError('Please enter the title and the category for the photo');
        }
        if (dropzoneRef.current) {
            const dz = dropzoneRef.current.dropzone;
    
            dz.files.forEach(file => {
                file.formData = new FormData();
                file.formData.append("user_id", currentUser._id);
                file.formData.append("user_name", currentUser.username);
                Object.keys(image).forEach(key => {
                    file.formData.append(key, image[key]);
                });
            });
    
            dz.processQueue();
        }
    },[image]);
    return <div className="upload-container">
        <div className=" flex flex-col justify-start items-start">
        {error.message ? <Alert severity="error">{error.message}</Alert> : ''}
        <div className="flex justify-center w-11/12 flex-col items-center">
            <div className="upload-container form-container">
            <div ref={dropzoneRef} className="dropzone">
                </div>
            </div>
            <div className="upload-container form-container">
            <h2>Upload file here</h2>
        </div>
        </div>
        <div className="upload-description form-container">
            <div className="flex items-center">
                <p>Public:</p>
                <Switch onChange={onChecked}  />
            </div>
        <TextField
        id="input-with-icon-textfield"
        label="Title"
        style={{maxWidth:'400px',width:'90%',minWidth:'300px',marginBottom:'30px'}}
        value={image.title}
        name="title"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      />
        </div>
        <div className="form-container">
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={6}
          name="description"
          value={image.description}
          style={{width:'500px'}}
          defaultValue="Default Value"
          onChange={handleChange}
        />
        </div>
        <div className="form-container flex justify-between w-11/12 h-9">
<SelectSmall category={image.category} selectCategory={handleChange} />
<Button style={{backgroundColor:'#5561DD'}}  variant='contained' onClick={handleUpload} >Submit</Button>
        </div>
        </div>
    </div>
}
export default UploadImageTab;