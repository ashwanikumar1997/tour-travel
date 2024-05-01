import React, { useState } from "react";
import "../../../assets/css/addTourPackage.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import axiosInstance from "../../../App/AxiosInstance";

const tourduration = [
  { label: "1 days, 1 night" },
  { label: "2 days, 1 night" },
  { label: "3 days, 2 night" },
  { label: "4 days, 3 night" },
  { label: "5 days, 4 night" },
  { label: "6 days, 5 night" },
  { label: "7 days, 6 night" },
  { label: "8 days, 7 night" },
  { label: "9 days, 8 night" },
  { label: "10 days, 9 night" },
  { label: "11 days, 10 night" },
  { label: "12 days, 11 night" },
  { label: "13 days, 12 night" },
  { label: "14 days, 13 night" },
  { label: "15 days, 14 night" },
];

const AddTourPackages = () => {
  const [tourImage, setTourImage] = useState([]);
  const [errors, setErrors] = useState("");

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const handleTourPictures = (e) => {
    const TourimageUpload = e.target.files;
    if (tourImage.length <= 9) {
      setTourImage([...tourImage, ...TourimageUpload]);
    } else {
      setErrors("only ten image upload");
    }
  };

  let ownerId = localStorage.getItem("authID");
  let agency_name = localStorage.getItem("agency-name");

  const onSubmit = async (data) => {
    try {
      if (ownerId && agency_name) {
        const formdata = new FormData();
        formdata.append("ownerId", ownerId);
        formdata.append("agency_name", agency_name);
        formdata.append("tourTitle", data.tourTitle);
        formdata.append("tourPackageAmount", data.tourPackageAmount);
        formdata.append("tourDuration", data.tourDuration);
        formdata.append("tourStartCity", data.tourStartCity);
        formdata.append("endTourCity", data.endTourCity);
        for (let key of Object.keys(tourImage)) {
          formdata.append("tourImage", tourImage[key]);
        }
        await axiosInstance
          .post("/tours/create-tours", formdata, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              navigate("/agency/himalayan-tour-and-travel");
            }
          });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="main">
      <header>
        <div className="text-box1" style={{ color: "black" }}>
          <h1 id="title" style={{ color: "black" }}>
            Agency Packages Form
          </h1>
          <hr />
          <p id="description">
            Fill your Packages get best experience our services
          </p>
        </div>
      </header>
      <div className="container-form">
        <form id="survey-form" onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={agency_name}
              name="agency_name"
              disabled={true}
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
              {...register("tourTitle", { required: true })}
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
              {...register("tourStartCity", { required: true })}
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
              {...register("endTourCity", { required: true })}
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
              {...register("tourPackageAmount", { required: true })}
              placeholder="Tour Package Amount"
              required
            />
          </div>
          <div className="labels">
            <label id="tour_duration" htmlFor="tour_duration">
              * Tour Duration
            </label>
          </div>
          <div className="input-tab">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tourduration}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...register("tourDuration", { required: true })}
                />
              )}
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
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTourPackages;
