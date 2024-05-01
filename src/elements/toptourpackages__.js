/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:54:19
 * @modify date 2019-09-03 10:54:19
 * @desc [description]
 */
import React from "react";
import { Link } from "react-router-dom";
import placeimage from "../assets/images/jerome-prax-60091-700x466.jpg";

export default function ElementGrid(props) {
  var Class = "";
  if (
    props.tour.ctmClass == 1 ||
    props.tour.ctmClass == 6 ||
    props.tour.ctmClass == 7 ||
    props.tour.ctmClass == 12
  ) {
    Class = "double_size";
  }
  console.log(props.tour.days);
  return (
    <div className="element grid classic4_cols animated4">
      <div className="one_fourth gallery4 classic static filterable portfolio_type themeborder">
        <Link className="tour_image" to={"/home/tours/" + props.tour.id}>
          <img src={props.tour.featuredImageUrl} alt="Niko Trip" />
          <div className="tour_price ">
            {props.tour.cost_price ? "Rs." + props.tour.cost_price : ""}
          </div>
        </Link>
        <div className="portfolio_info_wrapper">
          <Link
            className="tour_link"
            to={"/home/tours/single-tour" + props.tour.id}
          >
            <h4>{props.tour.name}</h4>
          </Link>
          <div className="tour_excerpt">
            <p>
              {props.tour.tour_excerpt
                ? props.tour.tour_excerpt
                : "Mountain, Rural, Urban"}{" "}
            </p>
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
              <span className="ti-time"></span>5&nbsp;days
            </div>
          </div>
          <br className="clear"></br>
        </div>
      </div>
    </div>
  );
}
