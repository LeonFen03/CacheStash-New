import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  
function ImageUpload ({ addImage,clearAll }) {
    const [image, setImage] = useState(null);

    function clear () {
        setImage(null);
    }
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                addImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return( <div className="imageContainer">
        <div>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload Image
            <VisuallyHiddenInput type="file" onChange={onImageChange} />
        </Button>
        <Button onClick={clear} variant="contained">Clear</Button>
        <Button onClick={clearAll} variant="contained">Clear All Images</Button>
        </div>
  </div>)
}
export default ImageUpload;