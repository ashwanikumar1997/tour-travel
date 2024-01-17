/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:54:19
 * @modify date 2019-09-03 10:54:19
 * @desc [description]
 */
import React, { useEffect } from "react";
import { ImageApiUrl } from "../functions/constants/apiConstants";

export default function DayContent({ place }) {
  console.log(place);
  return (
    <div className="single_tour_content">
      <div
        id="attachment_3078"
        style={{ width: "100%", display: "flex", gap: "5px" }}
        className="wp-caption alignnone"
      >
        <div style={{ width: "45%",padding:"8px" }}>
          <img
            className="size-full wp-image-3078"
            src={`${ImageApiUrl}${place.cityId.city_img}`}
            alt=""
          />
        </div>
        <div
          style={{
            width: "55%",
            padding: "10px",
            fontSize: "15px",
            fontWeight: "normal",
          }}
        >
          <p
            className="wp-caption-text"
            style={{ textAlign: "justify", fontSize: "15px" }}
          >
            {place.cityId.info.slice(0,650)}
          </p>
        </div>
      </div>
    </div>
  );
}
