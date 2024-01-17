/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:54:15
 * @modify date 2019-09-03 10:54:15
 * @desc [description]
 */
import React from "react";
import { Link } from "react-router-dom";
import { ImageApiUrl } from "../functions/constants/apiConstants";
import parse from "html-react-parser";

export const ArticlesTop = () => {
  return (
    <div
      className="one withsmallpadding ppb_header "
      style={{
        textAlign: "center",
        padding: "0px 0 0px 0",
        marginTop: "0px",
        marginBottom: "50px",
      }}
    >
      <div className="standard_wrapper">
        <div className="page_content_wrapper">
          <div className="inner">
            <div style={{ margin: "auto", width: "100%" }}>
              <h2 className="ppb_title">Articles &amp; Tips</h2>
              <div className="page_tagline" style={{ color: "#38404F" }}>
                Explore some of the best tips from around the world
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadArticles = () => {
  return (
    <div
      className="one withsmallpadding ppb_text"
      style={{ textAlign: "center", padding: "40px 0 40px 0" }}
    >
      <div className="standard_wrapper">
        <div className="page_content_wrapper">
          <div className="inner">
            <div style={{ margin: "auto", width: "100%" }}>
              <p>
                <Link
                  className="button"
                  style={{ marginTop: "10px" }}
                  to="/articles"
                >
                  Load All Articles
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ArticlesWrapper = ({ article }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className="post type-post hentry status-publish "
        style={{ width: "50%", backgroundColor:"#fff" }}
      >
        <div className="post_wrapper grid_layout">
          <div className="post_img small static">
            <Link to="#">
              <img
                src={`${ImageApiUrl}${article.placeImage}`}
                alt="7 Tips For Nomads On A Budget Trips"
                className=""
              />
            </Link>
          </div>
          <div className="post_header_wrapper" style={{ height: "450px",backgroundColor:"#fff" }}>
            <div className="post_header grid">
              <div className="post_detail single_post">
                <span className="post_info_date">
                  <a href="#" title="7 Tips For Nomads On A Budget Trips">
                    December 10, 2016
                  </a>
                </span>
              </div>
              <h6>
                <Link to="#" title="7 Tips For Nomads On A Budget Trips">
                  {article.title}
                </Link>
              </h6>
            </div>
            <p>
              {isExpanded
                ? article.content
                : parse(`${article.content?.slice(0, 150)}...`)}
            </p>
            <div className="post_button_wrapper">
              <Link className="readmore" to="/articles">
                {isExpanded ? "Read Less" : "Read More"}
                <span className="ti-angle-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <span className="current">1</span>
        <a href="/articles" className="inactive">
          2
        </a>
      </div>
      <div className="pagination_detail">Page 1 of 2</div>
    </>
  );
};
