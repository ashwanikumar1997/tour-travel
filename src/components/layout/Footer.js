/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:27
 * @modify date 2019-09-03 10:51:27
 * @desc [description]
 */
import React from "react";
import { Link } from "react-router-dom";
import white_logo from "../../assets/logo/HimalayanTour&Travel logoblack.png";
import SubscriberForm from "../commonwidget/subscriberform";
function Footer() {
  return (
    <>
      <div id="footer" className=" ppb_wrapper">
        <ul className="sidebar_widget three">
          <li id="text-2" className="widget widget_text">
            <div className="textwidget">
              <p>
                <img src={white_logo} alt="logo" width="100" maxHeight="22" />
              </p>
              <p>
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom
              </p>
              <div style={{ marginTop: "20px" }}>
                <div className="social_wrapper shortcode dark ">
                  <ul>
                    <li className="facebook">
                      <a target="_blank" title="Facebook" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a
                        target="_blank"
                        title="Twitter"
                        href="https://twitter.com/#"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a
                        target="_blank"
                        title="Instagram"
                        href="https://instagram.com/#"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li className="tripadvisor">
                      <a target="_blank" title="Tripadvisor" href="#">
                        <i className="fa fa-tripadvisor"></i>
                      </a>
                    </li>
                    <li className="yelp">
                      <a target="_blank" title="Yelp" href="#">
                        <i className="fa fa-yelp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li id="text-3" className="widget widget_text">
            <h2 className="widgettitle">Contact Info</h2>
            <div className="textwidget">
              <p>1-567-124-44227</p>
              <p>184 Main Street East Perl Habour 8007</p>
              <p>Mon &#8211; Sat 8.00 &#8211; 18.00 Sunday CLOSED</p>
            </div>
          </li>
          <li
            id="mc4wp_form_widget-2"
            className="widget widget_mc4wp_form_widget"
          >
            <h2 className="widgettitle">Newsletter</h2>
            <SubscriberForm />
          </li>
        </ul>
      </div>

      <div className="footer_bar  ppb_wrapper ">
        <div className="footer_bar_wrapper ">
          <div className="menu-main-menu-container">
            <ul id="footer_menu" className="footer_nav">
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-4">
                <Link
                  to="/"
                  style={{ paddingTop: "23px", paddingBottom: "23px" }}
                >
                  Home
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3101 current_page_item menu-item-3105">
                <Link
                  to="/tours"
                  style={{ paddingTop: "23px", paddingBottom: "23px" }}
                >
                  Tours
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-destination menu-item-3571">
                <Link
                  to="/destination"
                  style={{ paddingTop: "23px", paddingBottom: "23px" }}
                >
                  Destination
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10">
                <Link
                  to="/about"
                  style={{ paddingTop: "23px", paddingBottom: "23px" }}
                >
                  About
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3581">
                <Link
                  to="/contact"
                  style={{ paddingTop: "23px", paddingBottom: "23px" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div id="copyright">{"© Copyright Inimist Tour's and Travel"}</div>
          <br className="clear" />
          <a id="toTop" href="#">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
