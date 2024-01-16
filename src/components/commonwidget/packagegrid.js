/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:50:16
 * @modify date 2019-09-03 10:50:16
 * @desc [description]
 */
import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";


const PackageGrid = ({ tour }) => {
  console.log("tour",tour);
  return (
    <div className="element grid classic4_cols animated4" style={{width:"400px"}}>
      <div className="one_fourth gallery4 classic static filterable portfolio_type themeborder" style={{width:"350px"}}>
        <Link
          className="tour_image"
          to={`/tours/${tour._id}`}
        >
          <ImageSlider tourImages={tour.tourImage} />
          <div className="tour_price ">₹ {tour.tourPackageAmount}</div>
        </Link>
        <div className="portfolio_info_wrapper">
          <Link className="tour_link" to={"/tours/"}>
            <h6>
              <strong>{tour.tourTitle} Tour</strong>
            </h6>
          </Link>
          <div className="tour_excerpt">
            <span>Tour Provided By : {tour.agency_name}</span>
          </div>
          <div className="tour_attribute_wrapper">
            <div className="tour_attribute_rating">
              <div className="br-theme-fontawesome-stars-o">
                <div className="br-widget">
                  <a href="#" className="br-selected"></a>
                  <a href="#" className="br-selected"></a>
                  <a href="#" className="br-selected"></a>
                  <a href="#" className="br-selected"></a>
                  <a href="#"></a>
                </div>
              </div>
              <div className="tour_attribute_rating_count">4&nbsp;reviews</div>
            </div>
            <div className="tour_attribute_days">
              <span className="ti-time"> {tour.tourDuration}</span>
            </div>
          </div>
          <br className="clear"></br>
        </div>
      </div>
    </div>
  );
};
export default PackageGrid;
