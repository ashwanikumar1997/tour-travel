import { ImageApiUrl } from "../../functions/constants/apiConstants";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./imageSlider.css";


function ImageSlider({ tourImages,width,height }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = tourImages.map((image) => {
    return image.filename;
  });
  

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % tourImages.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + tourImages.length) % tourImages.length);
  };

  return (
    <>
      <div className="carousel-container-img" style={{maxWidth:`${width}`,maxHeight:`${height}`}}>
        <div className="carousel1">
          <Button variant="text" onClick={prevImage} style={{ width: "10px" }}>
            {"<"}
          </Button>
          <img
            className="image-view"
            src={`${ImageApiUrl}/${images[currentImage]}`}
            alt={`Image ${currentImage + 1}`}
            style={{ width:"100%" }}
          />
           <Button variant="text" onClick={nextImage} style={{ width: "10px" }}>
            {">"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
