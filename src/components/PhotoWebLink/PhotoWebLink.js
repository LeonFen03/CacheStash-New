import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { CurrentUser } from "../User/CurrentUser";
function PhotoWebLink() {
    const {currentUser} = useContext(CurrentUser);
    const [photoObject,setPhotoObject] = useState(null);
    const { id } = useParams();

    useEffect(() =>  {
      fetch(`http://localhost:4000/images/${id}`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id:(currentUser._id || null)
      })
  })
    .then( async (image) => {
      console.log(image)
      setPhotoObject(await image.json())
    })
        
    },[])
    
    
    return (<div className="w-full flex justify-center items-center">
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center p-4">
      <div className="w-full relative flex flex-col items-center bg-slate-200 shadow-2xl shadow-slate-600 rounded-lg overflow-hidden">
        <div className="flex items-center absolute top-0 left-0 m-5">
          <Avatar />
          <h2 className="m-3">{photoObject ? photoObject.username : ''}</h2>
        </div>
        <img className="max-w-full h-auto max-h-[80vh] object-contain" src={photoObject ? photoObject.image_url : ''} alt={photoObject ? photoObject.description : 'Image description'} />
      </div>
     <div className="w-full z-10 mt-8 bg-slate-200 shadow-2xl shadow-slate-600 p-5 text-center rounded-xl">
        <p>{photoObject ? photoObject.description : ''}</p>
      </div>
    </div>
  </div>)

}

export default PhotoWebLink;