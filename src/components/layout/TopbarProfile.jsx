import React, { useState } from "react";
import { getAuthUserFullname,Logout } from "../../actions/authActions";
import './TopBarProfile.css'

const TopbarProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
      
      };

  return (
   <>
      <div className="profile-dropdown">
      <button className="profile-toggle-button" onClick={handleToggle}>
        {getAuthUserFullname()}
      </button>
      {isOpen && (
        <div className="profile-dropdown-content">
          <p>Welcome, {getAuthUserFullname()}!</p>
          <button onClick={Logout}>Logout</button>
        </div>
      )}
    </div>
    </>
  );
};




export default TopbarProfile;
