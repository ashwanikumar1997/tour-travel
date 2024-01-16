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
import ContactTravelAgentForm from "./contactagent/ContactTravelAgentForm";

//import {getTopTour} from '../actions/toursActions.js'

const Landing = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const buttonContainerStyle = {
    position: "fixed",
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
      <button style={buttonContainerStyle} onClick={handleOpen}>
        Plan A trip
      </button>
      <ContactTravelAgentForm
        handleOpen={handleOpen}
        open={open}
        setOpen={setOpen}
      />
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
