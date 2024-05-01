/**
 * @author ashwani kumar
 * @email ashwanikumar@inimist.com
 * @create date 2023-09-03 10:51:05
 * @modify date 2023-10-09 15:00:05
 * @desc [description]
 */
import React from "react";
const TestimonialsSection = () => {
  return (
    <>
      <div
        className="one withsmallpadding ppb_header"
        style={{
          textAlign: "left",
          marginTop: "50px",
          backgroundColor: "#fff",
          alignItems:"center",
          
        }}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto" }}>
                <h2 className="ppb_title">Featured Testimonials</h2>
                <div className="page_tagline" style={{ color: "#000000" }}>
                  Discover your next experiences, and places.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="one withsmallpadding ppb_testimonial_column"
        style={{
          paddingBottom: "10px",
          backgroundColor: "#fff",
          marginBottom: "50px",
        }}
      >
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div className="testimonial_wrapper">
                <div className="one_third testimonial_column_element animated1 ">
                  <div className="testimonial_content">
                    "<em>Vivamus aliquet felis eu diam ultricies</em>
                    congue. Morbi porta lorem nec consectetur porta. Sed quis
                    dui elit. Pellentesque habitant morbi tristique senectus et
                    netus et male Sed vestibulum orci"
                    <br />
                    <br />
                    <div className="testimonial_customer">
                      <h6>Mark Anthony</h6>
                      <div className="testimonial_customer_position">CEO</div>-
                      <div className="testimonial_customer_company">
                        <a href="#" target="_blank">
                          WikiMedia
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="one_third testimonial_column_element animated2 ">
                  <div className="testimonial_content">
                    "Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.{" "}
                    <em>Sed vestibulum orci quam. Pellentesque</em> habitant
                    morbi tristique senectus et netus et male."
                    <br />
                    <br />
                    <div className="testimonial_customer">
                      <h6>Christina Hardy</h6>
                      <div className="testimonial_customer_position">
                        Marketing Manager
                      </div>
                      -
                      <div className="testimonial_customer_company">
                        <a href="#" target="_blank">
                          Red Inc.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="one_third testimonial_column_element animated3 last">
                  <div className="testimonial_content">
                    "In enim justo, rhoncus ut,{" "}
                    <em>imperdiet a, venenatis vitae</em>, justo. Nullam dictum
                    felis eu pede mollis pretium. Pellentesque habitant morbi
                    tristique senectus et netus et male."
                    <br />
                    <br />
                    <div className="testimonial_customer">
                      <h6>Jane Bennett</h6>
                      <div className="testimonial_customer_position">
                        Developer
                      </div>
                      -
                      <div className="testimonial_customer_company">
                        <a href="#" target="_blank">
                          Hubboard Media
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialsSection;
