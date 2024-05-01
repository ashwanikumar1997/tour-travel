/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:16
 * @modify date 2019-09-03 10:51:16
 * @desc [description]
 */
import React from "react";
import bestPrice from "../../assets/images/best-price.jpeg";
import handpickedhotel from "../../assets/images/hotel-img.jpg";
import bestService from "../../assets/images/tours-and-travels-service.jpg";

const WhyChooseUs = () => {
  return (
    <>
      <div
        className="one withsmallpadding ppb_header "
        style={{
          textAlign: "center",
          marginBottom: "40px",
          backgroundColor:"#fff",
        }}
      >
        <div className="standard_wrapper" >
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "100%" }}>
                <h2 className="ppb_title">Why Choose Us</h2>
                <div className="page_tagline" style={{ color: "black" }}>
                  Here are reasons you should plan trip with us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="standard_wrapper" >
        <div
          className="one_third withsmallpadding ppb_text"
          style={{
            textAlign: "center",
            padding: "0px 0 0px 0",
            marginBottom: "70px",
          }}
        >
          <div className="standard_wrapper" style={{ backgroundColor:"#fff",}}>
            <div className="page_content_wrapper">
              <div className="inner">
                <div style={{ margin: "auto", width: "100%" }}>
                  <p>
                    <img
                      className="alignnone wp-image-3106 size-medium"
                      src={handpickedhotel}
                      width="150"
                      height="150"
                      alt=""
                    />
                  </p>
                  <h4 className="p1">
                    <span className="s1">
                      <b>Handpicked Hotels</b>
                    </span>
                  </h4>
                  <p>
                    Hand-picked hotel content" is carefully chosen information
                    about hotels, emphasizing their unique features and
                    amenities for travelers' informed decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="standard_wrapper">
        <div
          className="one_third withsmallpadding ppb_text"
          style={{
            textAlign: "center",
            padding: "0px 0 0px 0",
            marginBottom: "70px",
          }}
        >
          <div className="standard_wrapper" style={{ backgroundColor:"#fff",}}>
            <div className="page_content_wrapper">
              <div className="inner">
                <div style={{ margin: "auto", width: "100%" }}>
                  <img
                    className="alignnone wp-image-3107 size-medium"
                    src={bestService}
                    width="150"
                    height="150"
                  />

                  <h4 className="p1">
                    <span className="s1">
                      <b>World Class Service</b>
                    </span>
                  </h4>
                  <p>
                    "World-class service" signifies the highest level of
                    excellence and quality in providing customer service,
                    exceeding expectations and delivering exceptional
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="standard_wrapper">
        <div
          className="one_third last withsmallpadding ppb_text"
          style={{
            textAlign: "center",
            padding: "0px 0 0px 0",
            marginBottom: "70px",
          }}
        >
          <div className="standard_wrapper" style={{ backgroundColor:"#fff",}}>
            <div className="page_content_wrapper">
              <div className="inner">
                <div style={{ margin: "auto", width: "100%" }}>
                  <div>
                    <img
                      className="alignnone wp-image-3108 size-medium"
                      src={bestPrice}
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>

                  <h4 className="p1">
                    <span className="s1">
                      <b>Best Price Guarantee</b>
                    </span>
                  </h4>
                  <p>
                    "Best Price Guarantee" ensures that you'll get the lowest
                    price available when booking a product or service, promising
                    the most competitive rates and cost savings for customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
