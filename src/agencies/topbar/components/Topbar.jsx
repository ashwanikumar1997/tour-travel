// TopBar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/AgencyTopbar.css"; // Import your CSS file
import logo from "../../../assets/images/logo@2x_white.png";
import TopbarProfile from "../../../components/layout/TopbarProfile";
import { FaBell } from "react-icons/fa";

function TopBar() {
  let [notification, setNotifications] = useState(0);
  const agency = localStorage.getItem("agency-name");
  const design = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#00c853" : "white",
    };
  };

  const bellCountIncrese = () => {
    setNotifications((prev) => prev + 1);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="top-bar">
        <div className="logo">
          <img
            src={logo}
            style={{ height: "30px", width: "50px" }}
            alt="App-Logo"
          />
        </div>
        <div className="nav-links">
          <NavLink to="/agency/himalayan-tour-and-travel" style={design}>
            Agency Dashboard
          </NavLink>
          {agency ? (
            ""
          ) : (
            <NavLink
              to="/agency/himalayan-tour-and-travel/agency-details-form"
              style={design}
            >
              Agency details form
            </NavLink>
          )}
          <NavLink to="/agency/himalayan-tour-and-travel/add-tour-packages">
            Add Tour Packages
          </NavLink>
          <NavLink to="/agency/himalayan-tour-and-travel/check-tour-status">
            Check Tour Status
          </NavLink>
        </div>
        <div>
          <div style={{ marginRight: "10px", color: "white" }}>
            <FaBell onClick={bellCountIncrese} />
            {notification}
          </div>
          <span style={{ fontSize: "15px", color: "orange" }}>
            <TopbarProfile />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
