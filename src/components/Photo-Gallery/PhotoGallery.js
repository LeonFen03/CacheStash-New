import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './PhotoGallery.css'
import { useState } from 'react';
import { CurrentUser } from '../User/CurrentUser';
import SearchBarAndFilter from '../SearchBarAndFilters/SearchBarAndFilters';
import { useEffect } from 'react';
import { useContext } from 'react';
function PhotoGallery () {
    const [userPhotos,setUserPhotos] = useState([]);
    const {currentUser } = useContext(CurrentUser);
    const categoriesWithColorTypes = [
        ["Adventure", "error"],
        ["Nature", "info"],
        ["Urban", "warning"],
        ["Portraits", "success"],
        ["Travel", "primary"],
        ["Stuff", "secondary"],
        ["Events", "primary"]
    ];
    const grabUserPhotos = async () => {
        try {
       
        const response = await fetch(`http://localhost:4000/images`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:currentUser._id
            })
        })
        setUserPhotos(await response.json());
    } catch(err) {
        console.log(err);
    }
    }
    useEffect(() => {
        grabUserPhotos();
    },[]);

    
    const [photos,setPhotos] = useState([]);
    useEffect(() => {
        setPhotos((prev) => {
            return [...prev,...userPhotos]
        })
    },[userPhotos])
    useEffect(() => {
        fetch('https:/api.unsplash.com/photos/?client_id=pJqzF8NAu8Yda5WIXH3cnDcLthV_cG7vCGfd3XHMaJo&per_page=60').then( async (photos) => {
            setPhotos((await photos.json()).map((object) => {

                return {
                    ...object,
                    _id:0,
                    image_url:object.urls.regular,
                    user_name:object.user.username,
                    avatar_url:object.user.profile_image.medium,
                    description:object.description,
                    "category": categoriesWithColorTypes[Math.floor(Math.random()*categoriesWithColorTypes.length)]
                };
            }));
        })
    },[])

    return (<SearchBarAndFilter photos={photos}   />)
}
export default PhotoGallery;