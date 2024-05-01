import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const UserRoute = ({ role, userRole }) => {
   
  return (
    <>
      {role === userRole ? (
        <>
          <Navbar /> <Outlet />
        </>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default UserRoute;
