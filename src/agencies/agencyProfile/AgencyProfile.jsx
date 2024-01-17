import React from "react";
import "./index.css";
import profile_image from "../../assets/images/profile_image.jpg";

import AgencyDetails from "./components/AgencyDetails";
import ViewAgencyPackages from "../ViewAgency/ViewAgencyPackages";

const index = () => {
  
  
  return (
    <>
      <div className="vendor-dashboard">
        <div className="profile-section">
        
          <div className="background-image">{/* Background image */}</div>
          <div className="profile-image">
            <img src={profile_image} alt="Profile" />
           
          </div>
         
        </div>
        <div className="features-section">
          <h2>Agency Dashboard</h2>
          <div className="feature-item">
            <AgencyDetails />
            {/* Render Product Listings component */}
          </div>
          <div className="feature-item"  >
            <ViewAgencyPackages/>
          </div>
          <div className="feature-item">
            <h3>Profile Customization</h3>
            {/* Render Profile Customization component */}
          </div>
          <div className="feature-item">
            <h3>Inventory Management</h3>
            {/* Render Inventory Management component */}
          </div>
          <div className="feature-item">
            <h3>Tour Updation and Filtering</h3>

            {/* Render Product Search and Filtering component */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
