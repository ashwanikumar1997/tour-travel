/**
 *
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:08
 * @modify date 2019-09-03 10:51:08
 * @desc [description]
 *
 **/

import React, { Component } from "react";
import SubscriberWidget from "./subscriberwidget";
import { getCurrentFeed } from "../../actions/feedActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ElementGrid from "../../elements/topdestinations";
import Spinner from "../../components/common/Spinner";
import Alldestination from "../destination/Alldestination";

class TopDestinations extends Component {
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
    this.props.getCurrentFeed();
  }
  115222280;

  render() {
    const { feed, loading } = this.props.feed;
    let citiesToShow = 6;

    let placeContent;
    if (feed === null || loading) {
      placeContent = <Spinner />;
    } else {
      if (Object.keys(feed).length > 0) {
        let count = 0;
        placeContent = feed.slice(0, citiesToShow).map((place, i) => {
          count++;
          return <ElementGrid props={place} ctmClass={count} key={i} />;
        });
      } else {
        placeContent = "Sorry No topdestinations ";
      }
    }

    return (
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
                    <div style={{ marginBottom: "20px" }}>
                      <h1 style={{ float: "left" }}>
                        <span style={{ color: "#38404F" }}>
                          {" "}
                          Let us plan you a perfect
                        </span>{" "}
                        <span style={{ color: "orangered" }}>
                          Himachal Holiday
                        </span>{" "}
                      </h1>
                      <br /> <br />
                      <span
                        style={{
                          color: "#38404F",
                          fontFamily: "sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        Custom-Crafted Tour Packages for Unforgettable Holiday
                        Experiences in Himachal Pardesh.
                      </span>
                    </div><br/>
                    <h2
                      style={{
                        marginBottom: "50px",
                        float: "left",
                        color: "#38404F",
                        fontSize: "40px",
                      }}
                    >
                      Explore Top Destinations by Places
                      <br />
                      <Link
                        style={{
                          font: "15px sans-serif",
                          textDecoration: "underline",
                          color: "purple",
                        }}
                        to="/destination"
                      >
                        View All Places
                      </Link>
                    </h2>

                    <div
                      id="15653405321386753074"
                      className="portfolio_filter_wrapper gallery grid metro portrait four_cols"
                      data-columns="4"
                    >
                      {/* <Alldestination placeContent= */}
                      {placeContent}
                      {/* /> */}
                    </div>
                  </div>
                </div>
              </div>
              <SubscriberWidget />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TopDestinations.propTypes = {
  getCurrentFeed: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  feed: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  feed: state.feed,
});

export default connect(mapStateToProps, { getCurrentFeed })(TopDestinations);
