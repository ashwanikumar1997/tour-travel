/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:31
 * @modify date 2019-09-03 10:51:31
 * @desc [description]
 */

import React, { useState } from "react";

import { useLocation, NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { getSearchResults } from "../../actions/searchActions";
import logo from "../../assets/images/logo@2x.png";
import white_logo from "../../assets/logo/logo.png";
// import "../../assets/css/reset.css";
// import "../../assets/css/wordpress.css";
// import "../../assets/css/animation.css";
// import "../../assets/css/ilightbox/ilightbox.css";
// import "../../assets/css/jqueryui/custom.css";
// import "../../assets/css/tooltipster.css";
// import "../../assets/css/odometer-theme-minimal.css";
import "../../assets/css/screen.css";
import "../../assets/css/menus/leftalignmenu.css";
import "../../assets/css/font-awesome.min.css";
// import "../../assets/css/themify-icons.css";
import "../../assets/css/grid.css";
import "../../assets/css/admin-ajax.css";
import "../../assets/css/fontawesome-stars-o.css";
import "./scroll.css";
import SearchBar from "./SearchBar";
import { AddIcons,TripIcon,UserIcon } from "../../assets/icons";
import TopbarProfile from "./TopbarProfile";
import ContactTravelAgentForm from "../contactagent/ContactTravelAgentForm";
import TravelAgencyDropdownMenu from "./TravelAgencyDropdownMenu";

export const Navbar = () => {
  const token = localStorage.getItem("authToken");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const location = useLocation();
  let userType = localStorage.getItem("auth_account_type");

  const design = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#00c853" : "white",
    };
  };
  return (
    <div
      className="header_style_wrapper scroll_up text-black "
      data-st="0"
      data-lastscrolltop="0"
      style={{ marginBottom: "150px" }}
    >
      {userType === null && (
        <div style={{ backgroundColor: "#333", maxHeight: "56px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                padding: "2px",
                margin: "2px",
                color: "white",
                border: "none",
              }}
              onClick={handleOpen}
            >
              <TripIcon style={{ maxHeight: "30px" }} />{" "}
              <span style={{ padding: "5px" }}>Plan A Trip</span>
            </button>
            <ContactTravelAgentForm
              handleOpen={handleOpen}
              open={open}
              setOpen={setOpen}
            />
            <div>
              <TravelAgencyDropdownMenu />
            </div>
            <span>|</span>
            <div style={{ marginLeft: "25px", color: "#fff" }}>
              <Link
                to="/agency/himalayan-tour-and-travel/add-tour-packages"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "15px",
                  gap: "5px",
                }}
              >
                <AddIcons />
                <span>Add Tour Packages Free</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="top_bar scroll_up hasbg">
        <div className="standard_wrapper">
          <div id="logo_wrapper">
            <div id="logo_normal" className="logo_container">
              <div className="logo_align">
                <NavLink className="logo_wrapper hidden" to="/">
                  <img src={logo} alt="" width="92" height="22" />
                </NavLink>
              </div>
            </div>
            <div id="logo_transparent" className="logo_container">
              <div className="logo_align">
                <a className="logo_wrapper default" href="/">
                  <img src={white_logo} alt="logo" style={{maxWidth:"50px", maxHeight:"30px"}} />
                </a>
              </div>
            </div>
            <div style={{ marginTop: "5px" }}>
              {location.pathname === "/" ? <SearchBar /> : null}
            </div>
            <div id="menu_wrapper">
              <div id="nav_wrapper">
                <div className="nav_wrapper_inner">
                  <div id="menu_border_wrapper">
                    <div className="menu-main-menu-container">
                      <ul id="main_menu" className="nav">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-4">
                          <NavLink to="/" style={design}>
                            Home
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6">
                          <NavLink to="/home/articles" style={design}>
                            Articles
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3101 current_page_item menu-item-3105">
                          <NavLink
                            className="nav-link"
                            to="/home/tours"
                            style={design}
                          >
                            Tours
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-destination menu-item-3571">
                          <NavLink
                            className="nav-link"
                            to="/home/destination"
                            style={design}
                          >
                            Destination
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10">
                          <NavLink
                            className="nav-link"
                            to="/home/about"
                            style={design}
                          >
                            About
                          </NavLink>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3581">
                          <NavLink
                            className="nav-link"
                            to="/home/contact"
                            style={design}
                          >
                            Contact
                          </NavLink>
                        </li>
                        {token !== null ? (
                          <TopbarProfile />
                        ) : (
                          <>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3581">
                              <NavLink
                                className="nav-link"
                                to="/login"
                                style={design}
                              >
                                Login
                              </NavLink>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3581">
                              <NavLink
                                className="nav-link"
                                to="/register"
                                style={design}
                              >
                                Sign Up
                              </NavLink>
                            </li>
                          </>
                        )}
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="logo_right_button">
                  <a href="#" id="mobile_nav_icon">
                    <span className="ti-menu"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getSearchResults: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  search: state.search,
});
export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
  getSearchResults,
})(Navbar);
