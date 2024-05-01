import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import Topbar from "../agencies/topbar/components/Topbar";

const VendorRoute = ({ role, userRole, rest }) => {
  
  return (
    <div>
      {role === userRole ? (
        <>
          <Topbar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </div>
  );
};

export default VendorRoute;
