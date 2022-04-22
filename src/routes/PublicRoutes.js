import React from 'react'


import {Navigate, Outlet} from 'react-router-dom'


const useAuth =()=> {
    const user = sessionStorage.getItem("Auth Token");
    return user;
}


const  PublicRoutes=(props) =>{
    const auth=useAuth()
    return auth?<Navigate to="/home"/>: <Outlet/>
}


export default PublicRoutes;