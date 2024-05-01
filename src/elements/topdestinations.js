/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:54:19
 * @modify date 2019-09-03 10:54:19
 * @desc [description]
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import IsLaoding from "./Loading";

export default function ElementGrid(props) {
  const [isLoading,setIsloading]=useState(true)

if(!props.props){
  return <IsLaoding/>
}
  var Class = "";
  if (
    props.ctmClass == 1 ||
    props.ctmClass == 6 ||
    props.ctmClass == 7 ||
    props.ctmClass == 12
  ) {
    Class = "double_size";
  }
  return (
    <div
      className={"element grid center classic4_cols " + Class + " animated2"}
    >
       <Link to={"/home/places/" + props.props._id}>
      <div
        className="one_fourth gallery4 grid static filterable portfolio_type themeborder"
        style={{ backgroundImage: "url(" + props.props.city_img + ")" }}
      >
        <div className="ppb_background_overlay light"></div>
       
        <div className="portfolio_info_wrapper">
          <div className="portfolio_info_content">
            <h3>{props.props.city}</h3>
          </div>
        </div>
       
      </div>
      </Link>
    </div>
  );
}
