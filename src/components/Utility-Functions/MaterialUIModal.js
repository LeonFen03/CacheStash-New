import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';

export default function BasicModal({ title ,id, img_src, description, children, name,avatar_url, categoryRendered }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  async function deletePhoto() {
    const response = await fetch(`http://localhost:4000/images/${id}`, {
        method: 'DELETE'
    });
}
  return (
    <div >
      <span onClick={handleOpen}>{children}</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{overflow:'auto'}}
      >
        <Box className="relative top-20 mx-auto p-5 border w-11/12 sm:w-full md:w-3/4  xl:w-2/3 shadow-lg rounded-md bg-white ">
            <div  className="w-full p-1 mt-3 text-center mx-auto max-w-4xl">
                <img className="max-w-full h-auto max-h-screen mx-auto object-contain" src={img_src} />
            </div>
            <div className="p-3">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="modal-user-header flex justify-between items-center xsm:flex-col" >
                <div className="modal-header xsm:scale-[0.7]" style={{display:'flex',alignItems:'center'}}> <Avatar src={avatar_url} style={{width:'80px',height:'80px',margin:'20px'}} /> <h2>{name}</h2> </div>
                {categoryRendered}
            </div>
          </Typography>
          <br />
          <Typography className="m-8 text-[1em]"  variant="h7" component="h2">
            {description}
          </Typography>
          <br />
          <div>
            <Button onClick={deletePhoto} variant="contained" color="error">Remove this image</Button>
          </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}