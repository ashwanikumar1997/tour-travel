/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:50:54
 * @modify date 2019-09-03 10:50:54
 * @desc [description]
 */
import React from "react";
import customerservice from "../../assets/images/customer-care.png";
import { useLocation } from "react-router-dom";
import AboutHimachalPardesh from "./AboutHimachalPardesh";
import { Link } from "react-router-dom";
const PoweredBy = () => {
  const location = useLocation();
  return (
    <>
      <div
        className="one withsmallpadding ppb_text"
        style={{ textAlign: "center", padding: "40px 0 40px 0"}}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "100%", }}>
                {location.pathname === "/contact" ? null : (
                  <AboutHimachalPardesh />
                )}
                <img
                  className="aligncenter wp-image-3080 size-full"
                  src={customerservice}
                  alt=""
                  width="400"
                  height="200"
                />

                <h3>Speak to our expert at 1-800-453-6744</h3>
                <p>
                  <Link
                    className="button"
                    style={{ marginTop: "10px" }}
                    to="/tours"
                  >
                    Browse All Tours
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="one ppb_image_fullwidth"
        style={{ padding: "0px 0 0px 0" }}
      >
        <div
          className="one withbg"
          style={{
            // backgroundImage: 'url(http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/uploads/2017/07/mountain_bg.jpg)',
            backgroundSize: "cover",
            backgroundPosition: "center top",
            height: "400px",
            position: "relative",
          }}
        ></div>
      </div>
    </>
  );
};
export default PoweredBy;
