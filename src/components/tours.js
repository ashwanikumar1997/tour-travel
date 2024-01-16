/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:59
 * @modify date 2019-09-03 10:51:59
 * @desc [description]
 */
import React, { useState, useEffect } from "react";
import "../assets/css/landing.css";
import Banner from "./home/banner";
import ElementGrid from "./commonwidget/packagegrid";
import PoweredBy from "./home/poweredby";
import bannerimage from "../assets/images/tour.jpg";
import Axios from "axios";



function Tours() {
  const [tourPackagesData, setTourPackagesData] = useState([]);

  useEffect(() => {
    Axios.get("/tours")
      .then((res) => {
        if (res.data) {
          setTourPackagesData(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  let banner = {
    name: "Tour Package's",
    image: bannerimage,
  };
  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <Banner props={banner} />
      </div>

      <div
        className="ppb_tour_classNameic one nopadding "
        style={{ marginBottom: "50px" }}
      >
        <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
          <div className="standard_wrapper">
            <div
              id="1565323702552895033"
              className="portfolio_filter_wrapper gallery classNameic four_cols"
              data-columns="4"
            >
              {tourPackagesData.map((tour) => (
                <ElementGrid tour={tour} key={tour._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <PoweredBy />
    </>
  );
}
export default Tours;
