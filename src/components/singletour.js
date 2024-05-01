/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:52:22
 * @modify date 2019-09-03 10:52:22
 * @desc [description]
 */
import React, { useEffect, useState } from "react";
import "../assets/css/landing.css";
import TourBanner from "./singletour/tourbanner";
import Spinner from "../components/common/Spinner";
import Axios from "axios";
import { ChatIcon,CrossIcon } from "../assets/icons";
import { Link, useParams } from "react-router-dom";
import DayContent from "../elements/dayContent";
import { PiCarProfile } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { MdCurrencyRupee } from "react-icons/md";
import { getAllTourPackages } from "../utils/apiHelper";
import TourNavbar from "./commonwidget/TourNavbar";
import { ChatBot } from "./commonwidget/ChatBot";

const buttonContainerStyle = {
  position: "fixed",
  borderRadius: "15px",
  right: "5%",
  bottom: "140px",
  zIndex: 999, // Ensure it's above other content
  animation: "blink 1.5s infinite",
  transition: "transform 0.5s ease-in-out",
};
const style = {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  borderRadius: "20px",
  right: "15%",
  bottom: "110px",
  transform: "translateX(50%)",
  zIndex: 999,
};
function SingleTour() {
  const [tourPackageData, setTourPackageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  const [show, setShow] = useState(true);

  const { id } = useParams();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    getAllTourPackages(id)
      .then((response) => {
        if (response) {
          setTourPackageData([response.data]);
          setIsLoading(false);
          console.log(response);
        }
      })
      .catch((error) => console.log("fetching error in tours package", error));
  }, [id]);

  return (
    <>
      <TourNavbar scrollToSection={scrollToSection} />
      <button style={buttonContainerStyle} onClick={handleOpen}>
        <ChatIcon size={30}/>!
      </button>
      {open ? (
        <div style={style}>
          <span style={{ float: "right", color: "#fff", margin: "5px" }}>
            {" "}
            <CrossIcon onClick={handleOpen} size={25} />
          </span>
          <ChatBot />
        </div>
      ) : (
        ""
      )}
      <div
        id="page_content_wrapper"
        className="hasbg "
        style={{ marginTop: "170px" }}
      >
        <div className="inner" id="overview">
          <div className="inner_wrapper">
            <div className="sidebar_content full_width">
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  {tourPackageData?.map((tour) => (
                    <div key={tour._id}>
                      <div style={{ width: "100%" }}>
                        <TourBanner tour={tour} show={show} />
                      </div>
                      <div
                        style={{
                          backgroundColor: "lightBlue",
                          width: "50%",
                          padding: "5px",
                          borderRadius: "10px",
                          marginLeft: "8px",
                        }}
                      >
                        <h5 style={{ textTransform: "capitalize" }}>
                          <PiCarProfile /> Tour Provide By: {tour.agency_name}
                        </h5>
                        <h5 style={{ textTransform: "capitalize" }}>
                          <FaLocationDot /> Tour Start From:{" "}
                          {tour.tourStartCity}
                        </h5>
                        <h5 style={{ textTransform: "capitalize" }}>
                          <FaLocationDot /> Tour End : {tour.endTourCity}
                        </h5>
                        <h5>
                          <GiTakeMyMoney /> Tour Package Price:{" "}
                          <span>
                            <MdCurrencyRupee /> {tour.tourPackageAmount}
                          </span>
                        </h5>
                        <h5>
                          <LuCalendarDays /> Tour Duration: {tour.tourDuration}
                        </h5>
                      </div>
                      <div
                        className="single_tour_after_content_wrapper"
                        id="tour-info"
                      >
                        <Link
                          to="#"
                          onClick={() => setShow(true)}
                          className="button"
                          data-type="inline"
                        >
                          Book This Tour
                        </Link>

                        <Link
                          id="single_tour_share_button"
                          to="#"
                          className="button ghost themeborder"
                        >
                          <span className="ti-email"></span>Share this tour
                        </Link>
                      </div>
                      <div></div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleTour;
