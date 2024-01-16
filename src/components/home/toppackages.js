/**
 *
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:08
 * @modify date 2019-09-03 10:51:08
 * @desc [description]
 *
 **/

import React, { Component, useEffect, useState } from "react";
import { getTopTours } from "../../actions/toursActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ElementGrid from "../commonwidget/packagegrid";
//import ElementGrid from '../../elements/toptourpackages';
import Spinner from "../../components/common/Spinner";

function TopPackages() {
const [topTourPacakages,setTopTourPacakages]=useState([]);

console.log(topTourPacakages);

  useEffect(()=>{
const topTour = getTopTours();
setTopTourPacakages(topTour)

  },[])

  
  return (
    <div
      className="ppb_tour_classic one nopadding "
      style={{ marginBottom: "50px" }}
    >
      <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
        <div className="standard_wrapper">
          <div
            id="1565323702552895033"
            className="portfolio_filter_wrapper gallery classic four_cols"
            data-columns="4"
          >
            
          </div>
        </div>
      </div>
    </div>
  );
}

TopPackages.propTypes = {
  getTopTours: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  tours: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  tours: state.tours,
});

export default connect(mapStateToProps, { getTopTours })(TopPackages);
