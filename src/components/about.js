/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:56
 * @modify date 2019-09-03 10:51:56
 * @desc [description]
 */
import React from "react";
import "../assets/css/landing.css";
import Banner from "./home/banner";
import TestimonialsSection from "./home/testimonialssection";

import OurStory from "./about/ourstory";
import OurValues from "./about/ourvalues";
import bannerimage from "../assets/images/about.jpg";

function About() {
  let banner = {
    name: "About Us",
    image: bannerimage,
  };
  return (
    <>
      <Banner props={banner} />
      <div className="ppb_wrapper hasbg ">
        <OurStory />
        <OurValues />
        <TestimonialsSection />
      </div>
    </>
  );
}
export default About;
