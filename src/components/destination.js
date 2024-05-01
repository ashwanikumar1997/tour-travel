/**
 *
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:52:12
 * @modify date 2019-09-03 10:52:12
 * @desc [description]
 *
 **/

import React, { Component } from "react";
import "../assets/css/landing.css";
import Banner from "./home/banner";
import ElementGrid from "../elements/topdestinations";
import SubscriberWidget from "./home/subscriberwidget";
import { getAllDestination } from "../actions/destinationActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IsLaoding from "../elements/Loading";
import bannerimage from "../assets/images/destination.jpg";
import { ArrowIcon } from "../assets/icons";
import { Link } from "react-router-dom";
const elements = ["1", "2", "3", "4"];
const items = [];
for (const [index, value] of elements.entries()) {
  items.push(<ElementGrid />);
}

class Destination extends Component {
  constructor() {
    super();
    this.state = {
      places: [],
      loading: [],
      error: "",
      loading: true,
    };
  }

  componentDidMount() {
    this.props.getAllDestination();
  }

  render() {
    const { destinations, loading } = this.props;

    let placeContent;
    if (destinations === "null" || loading) {
      placeContent = <IsLaoding />;
    } else {
      if (Object.keys(destinations.destinations).length > 0) {
        let count = 0;
        placeContent = destinations.destinations.map((place, i) => {
          count++;
          return <ElementGrid props={place} ctmclassName={count} key={i} />;
        });
      } else {
        placeContent = <IsLaoding/>;
      }
    }

    let banner = {
      name: "Destination",
      image: bannerimage,
    };

    return (
      <>
        <Banner props={banner} />

        <div className="ppb_tour_classic one nopadding ">
          <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
            <div className="standard_wrapper">
              <div id="wrapper" className="hasbg transparent">
                <div
                  className="ppb_destination_metro one nopadding "
                  style={{ marginTop: "-10px" }}
                >
                  <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
                    <div className="standard_wrapper">
                      <div
                        id="15653405321386753074"
                        className="portfolio_filter_wrapper gallery grid metro portrait four_cols"
                        data-columns="4"
                      >
                        {" "}
                        <h6
                          style={{
                            height: "30px",
                            marginTop: "15px",
                           padding:"5px"
                          }}
                        >
                          <Link to="/" style={{ color:"blue",textDecoration:"underline"}}>/home</Link><span>/destination</span>
                        </h6>
                        {/* <SelectedCountryShow/> */}
                        <h6
                          style={{
                            fontSize: "40px",
                            margin: "30px 0px 20px 0px ",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Best Place of Himachal Pardesh:
                        </h6>
                        {placeContent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SubscriberWidget />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Destination.propTypes = {
  getTopDestination: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  destinations: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  destinations: state.destinations,
});

export default connect(mapStateToProps, { getAllDestination })(Destination);
