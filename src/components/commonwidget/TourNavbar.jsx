import React from "react";
import { MoreIcon } from "../../assets/icons";

const TourNavbar = ({scrollToSection}) => {
  return (
    <nav
      style={{
        marginTop: "50px",
        backgroundColor: "#fff",
        position: "fixed",
        top: 15,
        width: "100%",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          listStyle: "none",
          padding: "10px",
          fontSize: "20px",
        }}
      >
        <li onClick={() => scrollToSection('overview')}>Overview</li>
        <li onClick={() => scrollToSection('tour-info')}>Tour Info</li>
        <li onClick={() => scrollToSection('amenities')}>Amenities</li>
        <li>
          <MoreIcon />
          More
        </li>
      </ul>
    </nav>
  );
};

export default TourNavbar;
