/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:01
 * @modify date 2019-09-03 10:51:01
 * @desc [description]
 */
import React from "react";
import placeimage from "../../assets/images/best_place.jpg";
import placeimage2 from "../../assets/images/best_place1.jpg";
import SubscriberForm from "../commonwidget/subscriberform";
import "../../assets/css/subscriber.css";

const SubscriberWidget = () => {
  return (
    <>
      <div
        className="one withsmallpadding ppb_text"
        style={{
          paddingBottom: "0px !important",
          textAlign: "center",
          padding: "30px 0 30px 0",
        }}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "80%" }}>
                <h2>
                  "Every moment and every event of{" "}
                  <span style={{ color: "#1C58F6" }}>
                    every man&#8217;s life
                  </span>{" "}
                  on earth plants south-americathing in his soul"
                </h2>

                <div className="image-container">
                  <div className="image-wrapper">
                    <img src={placeimage} alt="Image 1" className="image" />
                  </div>
                  <div className="image-wrapper">
                    <img src={placeimage2} alt="Image 2" className="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="one withsmallpadding ppb_text"
        style={{
          paddingTop: "20px !important",
          textAlign: "center",
          padding: "80px 0 80px 0",
          marginTop: "-20px",
        }}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "40%" }}>
                <SubscriberForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubscriberWidget;
