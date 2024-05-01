import React, { useEffect, useState } from "react";
import { ImageApiUrl } from "../../functions/constants/apiConstants";
import { RupeeIcon, AddIcons } from "../../assets/icons/icons";
import ImageSlider from "../../components/commonwidget/ImageSlider";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  // Card,
  Grid,
} from "@mui/material";
import axiosInstance from "../../App/AxiosInstance";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ViewAgencyPackages = () => {
  const [packages, setPackages] = useState([]);
  const [currentTourPackages, setCurrentTourPackages] = useState(1);
  const [itemsPerTourPackages] = useState(3);
  const loading = "Loading ...";

  const userId = localStorage.getItem("authID");

  useEffect(() => {
    axiosInstance
      .get(`/tours/agency-tour/${userId}`)
      .then((res) => {
        setPackages(res.data);
      })
      .catch((err) => console.log("error", err));
  }, [setPackages]);

  // pagenation
  const indexOfLastItemPackages = currentTourPackages * itemsPerTourPackages;
  const indexOfFirstItemPackages =
    indexOfLastItemPackages - itemsPerTourPackages;
  const currentItemsPackages = packages.slice(
    indexOfFirstItemPackages,
    indexOfLastItemPackages
  );
  const paginate = (pageNumber) => {
    setCurrentTourPackages(pageNumber);
  };
  // console.log(currentItemsPackages);
  return (
    <>
      {packages.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <Link
            style={{
              borderRadius: "8px",
              backgroundColor: "orange",
            }}
            to="/agency/himalayan-tour-and-travel/add-tour-packages"
          >
            <button>Add your Tour Pacakages</button>
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            backgroundColor: "#fff",
          }}
        >
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              margin: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <h1 style={{ width: "75%" }}>Your Tour Packages</h1>
              <div style={{ width: "15%", marginRight: "5px" }}>
                <Link
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "orange",
                  }}
                  to="/agency/himalayan-tour-and-travel/add-tour-packages"
                >
                  <button>
                    <AddIcons /> Tour Pacakages
                  </button>
                </Link>
              </div>
            </div>
            <Grid container spacing={2}>
              {currentItemsPackages.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  style={{ margin: "8px", float: "left" }}
                >
                  <ImageSlider key={index} tourImages={item.tourImage} />

                  <CardContent>
                    <Typography gutterBottom style={{ textAlign: "justify" }}>
                      <span>Tour Title: {item.tourTitle}</span>
                      <br /> <hr />
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ textAlign: "justify" }}
                    >
                      <span style={{ fontSize: "15px" }}>
                        Tour Start from: {item.tourStartCity}
                      </span>
                      <br /> <hr />
                      <span style={{ fontSize: "15px" }}>
                        Tour End where: {item.endTourCity}
                      </span>
                      <br />
                      <hr />
                      <span style={{ fontSize: "15px" }}>
                        Tour Package: <RupeeIcon />
                        {item.tourPackageAmount}
                      </span>
                    </Typography>
                  </CardContent>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Array.from({
          length: Math.ceil(packages.length / itemsPerTourPackages),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            style={
              currentTourPackages === index + 1
                ? { backgroundColor: "blue" }
                : { backgroundColor: "orange" }
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ViewAgencyPackages;
