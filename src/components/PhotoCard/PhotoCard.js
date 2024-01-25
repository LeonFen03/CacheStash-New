import React from 'react';
import './PhotoCard.css';
import { Avatar } from '@mui/material';
import MaterialUIChip from '../Utility-Functions/MaterialUIChipComponent';
import { CurrentUser } from '../User/CurrentUser';
import { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Button} from '@mui/material';
import BasicModal from '../Utility-Functions/MaterialUIModal';
import motion from 'framer-motion';
function PhotoCard ({ photo_url, title, name, avatar_url, description, category, id }) {
    const colorMap = {
        "error":"image-container mxsm:border-4 mxsm:border-red-500",
        "primary": "image-container mxsm:border-4 mxsm:border-blue-500",
        "success":"image-container mxsm:border-4 mxsm:border-green-500",
        "warning":"image-container mxsm:border-4 mxsm:border-orange-500",
        "secondary":"image-container mxsm:border-4 mxsm:border-purple-500",
        "info": "image-container mxsm:border-4 mxsm:border-blue-500"
    }
    console.log(colorMap[category[1]])
    console.log(category[1])
    const { currentUser } = useContext(CurrentUser);
    async function deletePhoto() {
        const response = await fetch(`http://localhost:4000/images/${id}`, {
            method: 'DELETE'
        });
    }
    return (<BasicModal key={id} id={id} name={name} avatar_url={avatar_url} title={title} img_src={photo_url} description={description} categoryRendered={<MaterialUIChip name={category[0]} color={category[1]}  />}><div className={colorMap[category[1]]}>
        <img src={photo_url}/>
        <div className="overlay">
            <div className="user-header">
            <div className="user-info-header mxsm:scale-[0.7]">
            <Avatar   style={{width:'60px',height:'60px',margin:'10px'}}  src={avatar_url}/>
            { currentUser.username === name ? <Button onClick={deletePhoto} style={{position:'absolute',transform:'scale(1.4)',top:'3px',right:'15px',color:'red'}}><CloseIcon /></Button> : ''}
            <p className="xsm:hidden"> {name} </p>
            </div>
            <span className="mxsm:hidden ">
            <MaterialUIChip  name={category[0]} color={category[1]}  />
            </span>
            </div>
            <span className="mxsm:hidden">
            <h2>{title}</h2>
            <p classname="xsm:text-sm "> {description}  </p>
            <p><u>Click to view full image</u></p>
            </span>
        </div>
    </div></BasicModal>)
}

export default PhotoCard;