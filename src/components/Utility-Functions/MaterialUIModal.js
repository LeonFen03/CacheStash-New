import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '48%',
  maxWidth:'700px',
  bgcolor: 'background.paper',
  borderRadius:'5px',
  height:'auto',
  boxShadow: 24,
  p: 4,
};

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
        style={{overflow:'scroll'}}
      >
        <Box sx={style}>
            <div  className="full-image">
                <img style={{maxWidth:'1200px',width:'100%',borderRadius:'10px'}} src={img_src} />
            </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="modal-user-header flex justify-between items-center xsm:flex-col" >
                <div className="modal-header xsm:scale-[0.7]" style={{display:'flex',alignItems:'center'}}> <Avatar src={avatar_url} style={{width:'80px',height:'80px',margin:'20px'}} /> <h2>{name}</h2> </div>
                {categoryRendered}
            </div>
          </Typography>
          <Typography className="m-8 text-[1em]"  variant="h7" component="h2">
            {description}
          </Typography>
          <br />
          <div>
            <Button onClick={deletePhoto} variant="contained" color="error">Remove this image</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}