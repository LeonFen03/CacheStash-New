import { createContext, useState,useEffect } from "react";
export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState({
        username:''
    });
    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:4000/authentication/profile',{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            })
            let user = await response.json();
            setCurrentUser(user || {username:''});
        }
        console.log(currentUser)
        getLoggedInUser();
    },[]);
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider


