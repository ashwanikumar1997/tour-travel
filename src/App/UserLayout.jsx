import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


const UserLayout = ({children}) => {
  return (
    <>
<Navbar/>
{children}
<Footer/>
    </>
  )
}

export default UserLayout;