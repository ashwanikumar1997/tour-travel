import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    return token !== null;
  };
  

export const PrivateRoute = () => {
    let navigate = useNavigate();
    if( !isAuthenticated() )   {
        navigate('/login')
    }
    return(
        <Outlet />
    )
}

export default PrivateRoute;