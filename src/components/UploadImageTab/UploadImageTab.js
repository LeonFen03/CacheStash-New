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

Dropzone.autoDiscover = false;
function UploadImageTab() {
    const {currentUser} = useContext(CurrentUser);
    const [image,setImage] = useState(null);
    const dropzoneRef = useRef(null);

    useEffect(() => {
        let dz = new Dropzone(dropzoneRef.current, {
            url: 'http://localhost:4000/upload',
            autoProcessQueue: false
        });

        dz.on("sending", function(file, xhr, formData) {
            
            formData.append("user_id", currentUser._id); // Replace 'yourUserIdValue' with the actual user ID
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

    const handleUpload = () => {
        if (dropzoneRef.current.dropzone) {
            dropzoneRef.current.dropzone.processQueue();
        }
    };
    return <div className="upload-container">

        <div className="upload-container">
           <div ref={dropzoneRef} className="dropzone">
            </div>
        </div>
        <div className="upload-container">
        <Button onClick={handleUpload} >Submit</Button>
        </div>
    </div>
}
export default UploadImageTab;