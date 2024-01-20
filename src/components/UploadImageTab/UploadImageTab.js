import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import './UploadImageTab.css';
import LinearIndeterminate from "../Utility-Functions/LinearIndeterminate";
import { Button } from "@mui/material";
import { useMemo,useRef } from "react";
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css'; // Import basic Dropzone styles

Dropzone.autoDiscover = false;
function UploadImageTab() {
    const [image,setImage] = useState(null);
    const dropzoneRef = useRef(null);
    const [dropzone, setDropzone] = useState(null);
    const handleUpload = () => {
        if (dropzoneRef.current.dropzone) {
            dropzoneRef.current.dropzone.processQueue();
        }
    };
    function addImage(value) {
        setImage(value);
    }
    
    function clearAll () {
        setImage(null);
    }
    useEffect(() => {
        // Initialize Dropzone
        if (!Dropzone.instances.length) {
            dropzoneRef.current.dropzone = new Dropzone(dropzoneRef.current, {
                url: 'http://localhost:4000/upload',
                autoProcessQueue: false,
            });
        }

        // Cleanup function
        return () => {
            if (dropzoneRef.current.dropzone) {
                dropzoneRef.current.dropzone.destroy();
                dropzoneRef.current.dropzone = null;
            }
        };
    }, []);
    return <div className="upload-container">

        <div className="upload-container">
           {image !== null ? '' : <LinearIndeterminate />}
           <div ref={dropzoneRef} className="dropzone">
            </div>
        </div>
        <div className="upload-container">
        <Button onClick={handleUpload} >Submit</Button>
        </div>
    </div>
}
export default UploadImageTab;