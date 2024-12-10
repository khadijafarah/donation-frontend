import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// import {jwtDecode} from "jwt-decode";
import { jwtDecode } from "jwt-decode";
const authProvider = () => {
 const [user, setUser]= useState(null);
 useEffect(()=>{
    const getUserFromToken=()=>{
        try {
            const token = Cookies.get("accessToken")
            console.log("This is a token",token);
            if(token){
                // const decoded = jwtDecode(token);
                const decoded= jwtDecode(token)
                console.log("decoded",decoded)
                setUser(decoded);
            }else{
                setUser(null);
            }
        } catch (error) {
            console.log(error);
            setUser(null);
        }
    }
    getUserFromToken();
 },[])
 return {user,setUser};
}

export default authProvider;