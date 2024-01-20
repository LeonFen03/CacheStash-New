import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import './UploadImageTab.css';
import LinearIndeterminate from "../Utility-Functions/LinearIndeterminate";
import ImageUpload from "../Utility-Functions/Upload";
import { Button } from "@mui/material";
function UploadImageTab() {
    const [image,setImage] = useState(null);
    function addImage(value) {
        setImage(value);
    }
    function clearAll () {
        setImage(null);
    }
    return <div className="upload-container">

        <div className="upload-container">
            <ImageUpload addImage={addImage} clearAll={clearAll} />
           {image !== null ? '' : <LinearIndeterminate />}
            {image !== null ? <div className="image-card"><div className="image-container"> <img style={{maxWidth:'900px'}}  src={image} /></div></div> : <Skeleton variant="rectangular" width={410}  height={600} />}
        </div>
        <div className="upload-container">
            <Button variant="contained">Submit</Button>
        </div>
    </div>
}
export default UploadImageTab;