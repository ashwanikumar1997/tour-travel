import React, { useState, useEffect } from "react";
import {Modal,Box} from "@mui/material";
import Spinner from "../common/Spinner";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import ContactTravelAgentForm from "../contactagent/ContactTravelAgentForm";
import { ShowNearbyPlaces } from "./ShowNearbyPlaces";
import { getAllPlaces } from "../../utils/apiHelper";
import { AlertPopUp } from "../../validation/alert";

let message = "Booking created successfully";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  overflow: "auto",
  transform: "translate(-50%, -50%)",
  maxHeight: "450px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};




const SelectedCityShow = () => {
  const [showSingleCityData, setShowSingleCityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cityPackages, setCityPackages] = useState([]);
  const [nearbyPlaces, setNearbyPlaces] = useState(null);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleOpen = () => setOpen(true);

  // const [isExpanded, setIsExpanded] = useState(false);
  // const [paragraphText, setParagraphText] = useState(showSingleCityData.info);

  const { placeid } = useParams();
  // const handleReadExpand = () => {
  //   setIsExpanded(!isExpanded);
  //   if (isExpanded) {
  //     setParagraphText(showSingleCityData.info.slice(0, 450)); // Show a shorter version
  //   } else {
  //     setParagraphText(showSingleCityData.info); // Show the full paragraph
  //   }
  // };
  
  const handleClose = () => setIsSuccess(false);
if (isSuccess) {
  setTimeout(()=>{handleClose()},1000)
}

  useEffect(() => {
    if (placeid) {
      Axios.get(`/places/${placeid}`).then((res) => {
        setShowSingleCityData(res.data);
        setIsLoading(false);
      });
    }
    getAllPlaces().then((data) => {
      if (data) {
        setNearbyPlaces(data);
      }
    });
  }, [placeid]);

  useEffect(() => {
    if (showSingleCityData) {
      Axios.get(`/tours/${showSingleCityData.city}`)
        .then((res) => {
          setCityPackages([res.data]);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      setCityPackages([]);
    }
  }, [showSingleCityData]);

  return (
    <>
      <div id="page_content_wrapper" className="hasbg ">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Modal
              open={isSuccess}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <AlertPopUp text={message} />
              </Box>
            </Modal>
            <div
              style={{
                marginTop: "130px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ justifyContent: "center", alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    padding: "5px",
                    marginBottom: "10px",
                  }}
                >
                  <img src={`../${showSingleCityData.city_img}`} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      maxWidth: "630px",
                      maxHeight: "300px",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "25px",
                        padding: "10px",
                        color: "#1075ba",
                        textAlign: "left",
                      }}
                    >
                      Top Tourist Places To Visit in {showSingleCityData.city}
                    </h1>
                    <div className="tour_attribute_rating">
                      <div
                        className="br-theme-fontawesome-stars-o"
                        style={{ marginLeft: "10px" }}
                      >
                        <div className="br-widget">
                          <a className="br-selected"></a>
                          <a className="br-selected"></a>
                          <a className="br-selected"></a>
                          <a className="br-selected"></a>
                          <a></a>
                        </div>
                      </div>
                      <div className="tour_attribute_rating_count">
                        4&nbsp;reviews
                      </div>
                    </div>
                    <br />
                    <div style={{ marginLeft: "10px" }}>
                      <span>
                        Best time to Visit : {showSingleCityData.time}
                      </span>
                      <br />
                      <span>Language : {showSingleCityData.language}</span>
                      <br />
                      <span>Temperature : {showSingleCityData.distance}</span>
                    </div>
                    <br />
                    <Link to={`/tours/${cityPackages._id}`}>
                      <button
                        style={{
                          margin: "10px",
                          border: "none",
                          padding: "10px",
                          backgroundColor: "#f1f1f1",
                          cursor: "pointer",
                          color: "#555",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#7bbeed")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#f1f1f1")
                        }
                        onClick={handleOpen}
                      >
                        {cityPackages.length > 0 ? cityPackages.length : 0}
                        <br />
                        Packages
                      </button>
                    </Link>{" "}
                    <button
                      style={{
                        margin: "10px",
                        padding: "10px",
                        border: "none",
                        backgroundColor: "#f1f1f1",
                        cursor: "pointer",
                        color: "#555",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#7bbeed")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#f1f1f1")
                      }
                      onClick={handleOpen}
                    >
                      120
                      <br />
                      Travel Agent
                    </button>
                    <button
                      style={{
                        margin: "10px",
                        padding: "10px",
                        border: "none",
                        backgroundColor: "#f1f1f1",
                        cursor: "pointer",
                        color: "#555",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#7bbeed")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#f1f1f1")
                      }
                      onClick={handleOpen}
                    >
                      Contact Agent
                    </button>
                    <ContactTravelAgentForm
                      handleOpen={handleOpen}
                      open={open}
                      setOpen={setOpen}
                      setIsSuccess={setIsSuccess}
                      isSuccess={isSuccess}
                    />
                  </div>
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      maxWidth: "35%",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <h1
                      style={{
                        padding: "15px",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#333",
                      }}
                    >
                      Nearby Places
                    </h1>
                    <ShowNearbyPlaces places={nearbyPlaces} />
                  </div>
                </div>
              </div>
            </div>
            <br />

            <br />
            <div style={{backgroundColor:"#fff",padding:"8px",borderRadius:"8px", marginBottom:"8px"}}>
            <strong
              style={{
                textDecoration: "underline",
                fontSize: "25px",
              }}
            >
              {showSingleCityData.city} Overview
            </strong>
            <p
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.5",
                color: "#555",
                textAlign:"justify",
                
              }}
            >
              {showSingleCityData.info}
              {/* <span
              style={{
                marginBottom:"30px",
                fontSize: "18px",
                fontWeight: "lighter",
                color: "blue",
                cursor:"pointer",
                float:"left"
              }}
              onClick={handleReadExpand}
            >
              {" "}
              {isExpanded ? "Read Less" : "Read More"}
            </span> */}
            </p>
            </div>
          </>
        )}
        <div className="inner" style={{backgroundColor:"#fff",padding:"10px",borderRadius:"8px", marginTop:"8px"}}>
          <div className="inner_wrapper">
            <div className="tour_related">
              <h3 className="sub_title">Related city</h3>
              <div
                id="portfolio_filter_wrapper"
                className="gallery classNameic four_cols portfolio-content section content clearfix"
                data-columns="4"
              ></div>
              <div className="sidebar_content full_width ">
                <blockquote>
                  <p>
                    Santorini is essentially what remains after an enormous
                    volcanic eruption that destroyed the earliest settlements on
                    a formerly single island
                  </p>
                </blockquote>
                <h4 className="p1">
                  <span className="s1">Exploring the Area</span>
                </h4>
                <p className="p2">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse
                  nihil, flexitarian Truffaut synth art party deep v chillwave.
                  Seitan High Life reprehenderit consectetur cupidatat kogi. Et
                  leggings fanny pack, elit bespoke vinyl art party Pitchfork
                  selfies master cleanse Kickstarter seitan retro. Drinking
                  vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo
                  biodiesel Neutra selfies.
                </p>
                <h4 className="p1">
                  <span className="s1">Coastal Adventures</span>
                </h4>
                <p className="p2">
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus.
                </p>
                <div
                  id="attachment_3099"
                  style={{ width: "1450px" }}
                  className="wp-caption alignnone"
                >
                  <img
                    className="size-full wp-image-3099"
                    // src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/uploads/2016/12/pexels-photo-210243.jpeg"
                    alt=""
                    width="1440"
                    height="960"
                  />
                  <p className="wp-caption-text">
                    The road to success and the road to failure are almost
                    exactly the same
                  </p>
                </div>
                <h4 className="p1">
                  <span className="s1">Eating and Drinking</span>
                </h4>
                <p className="p2">
                  See-through delicate embroidered organza blue lining luxury
                  acetate-mix stretch pleat detailing. Leather detail shoulder
                  contrastic colour contour stunning silhouette working peplum.
                  Statement buttons cover-up tweaks patch pockets perennial
                  lapel collar flap chest pockets topline
                </p>
                <h4 className="p2">What to See and Do</h4>
                <p>
                  Foam padding in the insoles leather finest quality staple flat
                  slip-on design pointed toe off-duty shoe. Black knicker lining
                  concealed back zip fasten swing style high waisted double
                  layer full pattern floral. Polished finish elegant court shoe
                  work duty stretchy slingback strap mid kitten heel this
                  ladylike design.
                </p>
                <p>
                  <img
                    className="alignnone size-full wp-image-3560"
                    // src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/uploads/2017/07/pexels-photo-525544.jpeg"
                    alt=""
                    width="1440"
                    height="960"
                  />
                </p>
                <h4 className="p2">Where to Stay</h4>
                <p>
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse
                  nihil, flexitarian Truffaut synth art party deep v chillwave.
                  Seitan High Life reprehenderit consectetur cupidatat kogi. Et
                  leggings fanny pack, elit bespoke vinyl art party Pitchfork
                  selfies master cleanse Kickstarter seitan retro. Drinking
                  vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo
                  biodiesel Neutra selfies.
                </p>
                <h4 className="p1">
                  <span className="s1">How to Get Around</span>
                </h4>
                <p className="p2">
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus.
                </p>
                <div style={{ height: "10px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="side_menu_wrapper" className="overlay_background visible share_open">
         f asdf asdfasdf
       </div> */}
    </>
  );
};

export default SelectedCityShow;
