import React, { useEffect, useState } from "react";
import img from "../../assets/images/best_place1.jpg";
import { useStyles } from "./ViewAgencyPackagesStyles";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  // Card,
  Grid,
} from "@mui/material";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ViewAgencyPackages = () => {
  const classes = useStyles();
  const [packages, setPackages] = useState([]);
  const [currentTourPackages, setCurrentTourPackages] = useState(1);
  const [itemsPerTourPackages] = useState(3);
  const loading = "Loading ...";

  const userId = localStorage.getItem("authID");

  useEffect(() => {
    Axios.get(`/tours/agency-tour/${userId}`)
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
        <Box margin="10px">
          <h1 className={classes.header}>Your Tour Packages</h1>
          <Grid className={classes.container} container spacing={2}>
            {currentItemsPackages.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                style={{ margin: "8px", float: "left" }}
              >
                <CardMedia
                  component="img"
                  height="130"
                  image={img}
                  alt="tour-image"
                />
                <CardContent>
                  <Typography gutterBottom>
                    {/* Agency Name:{" "} */}
                    <span className={classes.agency}>{item.agency_name}</span>
                    <hr />
                    <span className={classes.tour_Title}>
                      Tour Title: {item.tourTitle}
                    </span>
                    <br /> <hr />
                  </Typography>
                  <Typography variant="body2">
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
                      Tour Package: {item.tourPackageAmount}
                    </span>
                  </Typography>
                </CardContent>
              </Grid>
            ))}
          </Grid>
        </Box>
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
            className={
              currentTourPackages === index + 1
                ? classes.active_button
                : "orange"
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
