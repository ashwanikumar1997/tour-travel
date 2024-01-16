import React from "react";
import { Link } from "react-router-dom";

export const ShowNearbyPlaces = ({ places }) => {
  return (
    <div
      style={{
        padding:"5px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center",
        gap: "8px",
        textAlign: "center",
      }}
    >
      {places?.map((place) => (
        <Link to={"/places/" + place._id}>
          <div
            style={{
              borderRadius: "8px",
              minWidth: "160px",
              minHeight: "150px",
              display: "flex",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(../${place.city_img})`,
            }}
            key={place._id}
          ></div>
          <h3
            style={{
              padding:"5px",
              color: "#1075ba",
              textDecoration: "none",
              fontSize: "20px",
            }}
          >
            {place.city}
          </h3>
        </Link>
      ))}
    </div>
  );
};
