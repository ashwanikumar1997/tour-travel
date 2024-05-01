import React, { useState } from "react";
import "../../assets/css/agencyForm.css";
import { useNavigate } from "react-router-dom";
import { state_data } from "./State_Mock_data";
import Link from "@mui/material/Link";
// import axiosInstance from "../../App/AxiosInstance";
import Axios from "axios";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  numberValidation,
  imageValidation,
  nameValidation,
} from "../../validation/formValidation";

const userId = localStorage.getItem("authID");

export default function AgencyForm() {
  const [errors, setErrors] = useState(true);
  const [galleryUpload, setGalleryUpload] = useState([]);
  const [documentUpload, setDocumentUpload] = useState([]);
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const galleryImageUpload = (e) => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files).map((file) => file);
      setGalleryUpload([...galleryUpload, ...imageArray]);
    }
  };

  const handleDocumentUpload = (e) => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files).map((file) => file);
      setDocumentUpload([...documentUpload, ...imageArray]);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key of Object.keys(galleryUpload)) {
      formData.append("galleryPictures", galleryUpload[key]);
    }
    for (const key of Object.keys(documentUpload)) {
      formData.append("documentUpload", documentUpload[key]);
    }
    formData.append("userId", userId);
    formData.append("logoUpload", data.logoUpload);
    formData.append("profileImage", data.profileImage);
    formData.append("agency_name", data.agency_name);
    formData.append("agencyOwner", data.agencyOwner);
    formData.append("email", data.email);
    formData.append("phoneNumber1", data.phoneNumber1);
    formData.append("phoneNumber2", data.phoneNumber2);
    formData.append("yearOfFounding", data.yearOfFounding);
    formData.append("Agency_GSTN", data.Agency_GSTN);
    formData.append("regNumber", data.regNumber);
    formData.append("city", data.city);
    formData.append("address", data.address);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("pin_code", data.pin_code);
    formData.append("latitude", data.latitude);
    console.log("formData", formData);
    const response = await Axios.post("/agencies", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      if (res.status === 201) {
        navigate("/agency/himalayan-tour-and-travel");
      }
    
    });
  };

  return (
    <>
      <header>
        <div className="text-box">
          <h5>
            <Link underline="hover" href="/agency/himalayan-tour-and-travel">
              Dashboard
            </Link>
            / Agency Form<p></p>
          </h5>
          <h1 id="title">Agency Details Form</h1>
          <hr />
          <p id="description">Fill your details experience our services</p>
        </div>
      </header>
      <div className="container1">
        <form
          id="survey-form"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="labels">
            <label id="name-label" htmlFor="name">
              * Agency Name
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              {...register("agency_name", { required: true })}
              id="name"
              name="agency_name"
              placeholder="enter Agency Name"
              autoFocus
            />

            <span>{errors}</span>
          </div>

          <div className="labels">
            <label id="email-label" htmlFor="email">
              * Owner Name
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              {...register("agencyOwner")}
              type="text"
              id="owner_name"
              name="agencyOwner"
              placeholder="enter your name"
            />
          </div>
          <div className="labels">
            <label id="email-label" htmlFor="email">
              * Email
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              {...register("email")}
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
            />
          </div>
          <div className="labels">
            <label id="email-label" htmlFor="email">
              * Phone Number
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              {...register("phoneNumber1")}
              type="text"
              id="phone_number"
              name="phoneNumber1"
              placeholder="enter your phone number"
            />
          </div>
          <div className="labels">
            <label id="email-label" htmlFor="email">
              Alternate Phone Number
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              {...register("phoneNumber2")}
              type="text"
              id="phone_number2"
              name="phoneNumber2"
              placeholder="enter your alternate phone number"
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Agency Year of founding
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              {...register("yearOfFounding")}
              type="text"
              id="found_year"
              name="yearOfFounding"
              placeholder="Agency Year of founding"
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Agency GSTN
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="Agency_GSTN"
              name="Agency_GSTN"
              {...register("Agency_GSTN")}
              placeholder="Agency GSTN"
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Registration Number
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="registration_number"
              name="regNumber"
              {...register("regNumber")}
              placeholder="Registration Number"
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Agency Address
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="address"
              name="address"
              {...register("address")}
              placeholder="Agency Address"
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * city
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="city"
              name="city"
              {...register("city")}
              placeholder="City name agency is located"
            />
          </div>
          <div className="labels">
            <label htmlFor="dropdown">* state</label>
          </div>
          <div className="input-tab">
            <select id="dropdown" name="state" {...register("state")}>
              <option>-select State/UT-</option>
              {state_data.map((state, i) => (
                <option key={i} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Country
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="country"
              name="country"
              ref={register}
              {...register("country")}
              defaultValue="india"
              disabled
            />
          </div>

          <div className="labels">
            <label id="number-label" htmlFor="number">
              * PIN Code:
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="pin_code"
              name="pin_code"
              {...register("pin_code")}
              placeholder="pin code"
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              longitute/latitude
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              id="longitute_latitude"
              name="latitude"
              {...register("latitude")}
              placeholder="longitute/latitude"
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Document upload
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="file"
              name="documentUpload"
              onChange={handleDocumentUpload}
              multiple
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Agency Logo Upload
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="file"
              name="logoUpload"
              onChange={(e) => {
                const files = e.target.files[0];
                register("logoUpload", {
                  value: files,
                  type: files,
                });
              }}
              required
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Profile Image/Banner upload
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="file"
              name="profileImage"
              onChange={(e) => {
                const files = e.target.files[0];
                register("profileImage", {
                  value: files,
                  type: files,
                });
              }}
            />
          </div>
          <div className="labels">
            <label id="number-label" htmlFor="number">
              * Gallery pictures upload max 10.
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="file"
              name="galleryPictures"
              onChange={galleryImageUpload}
              multiple
            />
          </div>
          <div className="btn">
            <button id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
