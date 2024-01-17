import React, { useState } from "react";
import "./AddTourPackages.css";
import { Link } from "react-router-dom";
import Axios from "axios";

const AddTourPackages = () => {
  const [tourTitle, seTourTitle] = useState("");
  const [tourPackageAmount, setTourPackageAmount] = useState("");
  const [tourDuration, setTourDuration] = useState("");
  const [tourStartCity, setTourStartCity] = useState("");
  const [endTourCity, setEndTourCity] = useState("");
  const [tourImage, setTourImage] = useState([]);
  const [errors, setErrors] = useState("");
  const handleTourPictures = (e) => {
    const TourimageUpload = e.target.files;
    if (tourImage.length <= 9) {
      setTourImage([...tourImage, ...TourimageUpload]);
    } else {
      setErrors("only ten image upload");
    }
  };

  const resetField = () => {
    seTourTitle("");
    setTourStartCity("");
    setEndTourCity("");
    setTourDuration("");
    setTourPackageAmount("");
   
  };


  let ownerId = localStorage.getItem("authID")
  let agency_name = localStorage.getItem("agency-name")
  const handleSubmit = async () => {
    // e.preventDefault();
   
    try {
      const formdata = new FormData();
      formdata.append("ownerId", ownerId);
      formdata.append("agency_name", agency_name);
      formdata.append("tourTitle", tourTitle);
      formdata.append("tourPackageAmount", tourPackageAmount);
      formdata.append("tourDuration", tourDuration);
      formdata.append("tourStartCity", tourStartCity);
      formdata.append("endTourCity", endTourCity);
      tourImage.forEach((image, index) => {
        formdata.append(`tourImage`, image);
      });

      await Axios.post("/tours/create-tours", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        resetField();
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="main">
      <header>
        <div className="text-box1" style={{color:"black"}}>
          <h1 id="title" style={{color:"black"}}>Agency Packages Form</h1>
          <hr />
          <p id="description" >
            Fill your Packages get best experience our services
          </p>
        </div>
      </header>
      <div className="container-form">
        <form id="survey-form">
          <div className="labels">
            <label id="name-label" htmlFor="name">
              * Agency Name
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="name"
              name="agency_name"
              placeholder="enter Agency Name"
              required
              autoFocus
            />
          </div>

          <div className="labels">
            <label id="email-label" htmlFor="email">
              * Tour title
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="tour_title"
              name="tour_title"
              value={tourTitle}
              onChange={(e) => seTourTitle(e.target.value)}
              placeholder="enter tour title"
              required
            />
          </div>
          <div className="labels">
            <label id="start_tour_from" htmlFor="start_tour_from">
              * From City
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="start_tour_from"
              name="start_tour_from"
              value={tourStartCity}
              onChange={(e) => setTourStartCity(e.target.value)}
              placeholder="Starting Tour city"
              required
            />
          </div>

          <div className="labels">
            <label id="end_tour_where" htmlFor="end_tour_where">
              * To city
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="end_tour_where"
              name="end_tour_where"
              value={endTourCity}
              onChange={(e) => setEndTourCity(e.target.value)}
              placeholder="End Tour city"
              required
            />
          </div>
          <div className="labels">
            <label id="tour_amount" htmlFor="tour_amount">
              * Tour Package Amount
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="tour_amount"
              name="tour_amount"
              value={tourPackageAmount}
              onChange={(e) => setTourPackageAmount(e.target.value)}
              placeholder="Tour Package Amount"
              required
            />
          </div>
          <div className="labels">
            <label id="tour_durationl" htmlFor="tour_duration">
              * Tour Duration
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="tour_duration"
              value={tourDuration}
              name="tour_duration"
              placeholder="Tour Duration"
              onChange={(e) => setTourDuration(e.target.value)}
              required
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Tour pictures upload max 10.
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="file"
              name="tourPictures"
              onChange={handleTourPictures}
              multiple
              required
            />
            <span style={{ color: "red" }}>{errors}</span>
          </div>
          <div className="btn">
            <button id="submit" onClick={handleSubmit} type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTourPackages;
