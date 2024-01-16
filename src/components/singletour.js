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
import { Link, useParams } from "react-router-dom";
import DayContent from "../elements/dayContent";
import { PiCarProfile } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { MdCurrencyRupee } from "react-icons/md";
import { getAllTourPackages } from "../utils/apiHelper";

function SingleTour() {
  const [tourPackageData, setTourPackageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState(true);
  const { id } = useParams();

  const handleClose = () => {
    setShow(false);
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
      <div
        id="page_content_wrapper"
        className="hasbg "
        style={{ marginTop: "120px", backgroundColor: "#fff" }}
      >
        <div className="inner">
          <div className="inner_wrapper">
            <div
              className="sidebar_content full_width"
              style={{ backgroundColor: "#fff" }}
            >
              <div>{/* <TourAttributes tour={tour} show={this.open} /> */}</div>
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  {tourPackageData?.map((tour) => (
                    <div key={tour._id} style={{ backgroundColor: "#fff" }}>
                      <TourBanner tour={tour} show={show} />
                      <div
                        style={{
                          backgroundColor: "lightBlue",
                          width: "50%",
                          padding: "5px",
                          borderRadius:"10px",
                          marginLeft:"8px",
                        }}
                      >
                        <h5>
                          <PiCarProfile /> Tour Provider Name:{" "}
                          {tour.agency_name}
                        </h5>
                        <h5>
                          <FaLocationDot /> Tour Start From:{" "}
                          {tour.tourStartCity}
                        </h5>
                        <h5>
                          <FaLocationDot /> Tour End : {tour.endTourCity}
                        </h5>
                        <h5>
                          <GiTakeMyMoney /> Tour Package Price:{" "}
                          <span>
                            <MdCurrencyRupee /> {tour.tourPackageAmount}
                          </span>
                        </h5>
                        <h5>
                          <LuCalendarDays /> Tour Duration:{" "}
                          
                          {tour.tourDuration}
                         
                        </h5>
                      </div>
                      <div className="single_tour_after_content_wrapper">
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
                      <DayContent place={tour} />
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
