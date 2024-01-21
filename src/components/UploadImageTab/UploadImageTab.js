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
Dropzone.autoDiscover = false;
function UploadImageTab() {
    const {currentUser} = useContext(CurrentUser);
    const [image,setImage] = useState({
        title:'',
        description:'',
        category:''
    });
    function handleChange (e) {
        const {name, value} = e.target;
        setImage((prev) => ({
            ...prev,
            [name]:value
        }))
    }
    const finalSettings = useRef(image);
    const dropzoneRef = useRef(null);
    useEffect(() => {
        finalSettings.current = image;
    }, [image]);
    useEffect(() => {
        let dz = new Dropzone(dropzoneRef.current, {
            url: 'http://localhost:4000/upload',
            autoProcessQueue: false
        });
        dz.on("sending", function(file, xhr, formData) {
            formData.append("user_id", currentUser._id); // Replace 'yourUserIdValue' with the actual user ID
            formData.append("user_name", currentUser.username);
            console.log(finalSettings);
            Object.keys(finalSettings.current).forEach(key => {
                formData.append(key, finalSettings.current[key]);
            });


        });
        dz.on("success", function(file, response) {
            setImage({
                title:'',
                description:'',
                category:''
            })
        });
        // Cleanup function
        return () => {
            if (dz) {
                dz.off("sending");
                dz.destroy();
                dz = null;
            }
        };
    }, []);

    const handleUpload = useCallback(() => {
        if (dropzoneRef.current.dropzone) {
            dropzoneRef.current.dropzone.processQueue();
        }
    },[])
    return <div className="upload-container">

        <div className="upload-container">
           <div ref={dropzoneRef} className="dropzone">
            </div>
        </div>
        <div className="upload-container">
            <h2>Upload file here</h2>
        <Button onClick={handleUpload} >Submit</Button>
        </div>
        <div className="upload-description">
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
        variant="standard"
        onChange={handleChange}
      />
        </div>
        <div>
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={6}
          name="description"
          value={image.description}
          style={{width:'500px'}}
          defaultValue="Default Value"
          variant="standard"
          onChange={handleChange}
        />
        </div>
        <div>
<SelectSmall category={image.category} selectCategory={handleChange} />
        </div>
    </div>
}
export default UploadImageTab;