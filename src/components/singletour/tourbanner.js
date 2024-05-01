/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:39
 * @modify date 2019-09-03 10:51:39
 * @desc [description]
 **/

import React, { useEffect } from "react";
import isEmpty from "../common/helper";
import Spinner from "../common/Spinner";
import ImageSlider from "../commonwidget/ImageSlider";

const TourBanner = ({ tour }) => {
  const [data, setData] = React.useState(tour);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [images, setImages] = React.useState(null);

  useEffect(() => {
    // if (data) {
    //    data.tourImage?.map((image)=>console.log(image.filename))
    // }
  }, []);

  if (isEmpty(tour)) {
    return <Spinner />;
  } else {
    return (
      <div
        id="page_caption"
        style={{
          border: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "15px" }}>
          <ImageSlider
            tourImages={tour.tourImage}
            width="100%"
            height="150px"
            button={false}
          />
        </div>
      </div>
    );
  }
};
export default TourBanner;
