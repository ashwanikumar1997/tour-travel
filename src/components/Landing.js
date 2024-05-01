/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:52:14
 * @modify date 2019-09-03 10:52:14
 * @desc [description]
 */
import React, { useState } from "react";
import "../assets/css/landing.css";
import Banner from "./home/banner";
import SearchWidget from "./home/searchwidget";
import TopDestinations from "./home/topdestinations";
import TopPackages from "./home/toppackages";
import TestimonialsSection from "./home/testimonialssection";
import WhyChooseUs from "./home/whychooseus";
import ArticlesSection from "./home/articlessection";
import PoweredBy from "./home/poweredby";
import bannerimage from "../assets/images/home.jpg";
import Navbar from "./layout/Navbar";
import { ChatIcon,CrossIcon } from "../assets/icons";
import { ChatBot } from "./commonwidget/ChatBot";
import Tooltip from "@mui/material/Tooltip";
//import {getTopTour} from '../actions/toursActions.js'
const style = {
  display:"flex",
  flexDirection:"column",
  position: "fixed",
  borderRadius: "20px",
  right: "15%",
  bottom: "110px",
  transform: "translateX(50%)",
  zIndex: 999,
};
const Landing = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  const buttonContainerStyle = {
    position: "fixed",
    borderRadius: "50px",
    right: "5%",
    bottom: "140px",
    transform: "translateX(50%)",
    zIndex: 999, // Ensure it's above other content
  };
  let banner = {
    name: "Tour's & Travel",
    image: bannerimage,
  };
  return (
    <>
      <Tooltip title="Chat With us" style={{ backgroundColor: "#007bff" }}>
        <button style={buttonContainerStyle} onClick={handleOpen}>
          <ChatIcon size={30}/>!
        </button>
      </Tooltip>

      {open ? (
        <div style={style}>
          <span  style={{float:"right",color:"#fff",margin:"5px"}}> <CrossIcon onClick={handleOpen} size={25} /></span>
          <ChatBot />  
        </div>
      ) : (
        ""
      )}

      <Navbar />
      <Banner props={banner} />
      <SearchWidget />
      <TopDestinations />
      {/* <TopPackages /> */}

      <TestimonialsSection />

      <WhyChooseUs />
      <ArticlesSection />

      <PoweredBy />
    </>
  );
};

export default Landing;
