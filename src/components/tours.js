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
import axiosInstance from "../App/AxiosInstance";
import { FilterTourPackage } from "./common/FilterTourPackage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterTours } from "../reducers/toursSlice";

function Tours() {
  const tourSData = useSelector((state) => state.tours.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get("/tours")
      .then((res) => {
        if (res.data) {
          dispatch(filterTours(res.data));
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                backgroundColor: "#fff",
                margin: "10px",
                padding: "10px",
              }}
            >
              <FilterTourPackage />
            </div>
            <div className="standard_wrapper"  >
              <div
                id="1565323702552895033"
                className="portfolio_filter_wrapper gallery classNameic four_cols"
                data-columns="4"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {tourSData.map((tour) => (
                  <ElementGrid tour={tour} key={tour._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PoweredBy />
    </>
  );
}
export default Tours;
