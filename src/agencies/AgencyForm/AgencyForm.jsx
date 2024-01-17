import React, { useState } from "react";
import "./AgencyFormDesign.css";
import { state_data } from "./State_Mock_data";
import Link from "@mui/material/Link";
import Axios from "axios";
import {
  emailValidate,
  numberValidation,
  imageValidation,
  nameValidation,
} from "../../validation/formValidation";

const userId = localStorage.getItem("authID");
// const encodedValue = userId;
// const decodedValue = decodeURIComponent(encodedValue); // Decode URL-encoded value
// const originalId = decodedValue.replace(/"/g, "");

const initialFormState = {
  userId: `${userId}`,
  agency_name: "",
  agencyOwner: "",
  yearOfFounding: "",
  address: "",
  city: "",
  state: "",
  country: "india",
  pin_code: "",
  latitude: "",
  phoneNumber1: "",
  phoneNumber2: "",
  email: "",
  Agency_GSTN: "",
  regNumber: "",
  documentUpload: [],
  logoUpload: "",
  profileImage: "",
  galleryPictures: [],
};

export default function AgencyForm() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [errors, setErrors] = useState(true);

  // const multipleGalleryImageUpload = (e) => {
  //   const moreImageAdd = e.target.files;
  //   setGellarypictures([...gallery_pictures, ...moreImageAdd]);
  // };
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      setFormValues({
        ...formValues,
        [name]: files[0],
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Axios.post("/agencies", formValues).then((res) => {
      alert(res.data);
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
        <form id="survey-form" onSubmit={handleSubmit}>
          <div className="labels">
            <label id="name-label" htmlFor="name">
              * Agency Name
            </label>
          </div>
          <div className="input-tab">
            <input
              className="input-field"
              type="text"
              value={formValues.agency_name}
              id="name"
              name="agency_name"
              placeholder="enter Agency Name"
              onChange={handleChange}
              required
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
              value={formValues.agencyOwner}
              type="text"
              id="owner_name"
              name="agencyOwner"
              placeholder="enter your name"
              onChange={handleChange}
              required
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
              value={formValues.email}
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              onChange={handleChange}
              required
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
              value={formValues.phoneNumber1}
              onChange={handleChange}
              type="text"
              id="phone_number"
              name="phoneNumber1"
              placeholder="enter your phone number"
              required
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
              value={formValues.phoneNumber2}
              onChange={handleChange}
              type="text"
              id="phone_number2"
              name="phoneNumber2"
              placeholder="enter your alternate phone number"
              required
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
              value={formValues.yearOfFounding}
              onChange={handleChange}
              type="text"
              id="found_year"
              name="yearOfFounding"
              placeholder="Agency Year of founding"
              required
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
              value={formValues.Agency_GSTN}
              onChange={handleChange}
              placeholder="Agency GSTN"
              required
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
              value={formValues.regNumber}
              onChange={handleChange}
              placeholder="Registration Number"
              required
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
              value={formValues.address}
              onChange={handleChange}
              placeholder="Agency Address"
              required
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
              value={formValues.city}
              onChange={handleChange}
              placeholder="City name agency is located"
              required
            />
          </div>
          <div className="labels">
            <label htmlFor="dropdown">* state</label>
          </div>
          <div className="input-tab">
            <select
              id="dropdown"
              name="state"
              value={formValues.state}
              onChange={handleChange}
            >
              <option>-select State/UT-</option>
              {state_data.map((state, i) => (
                <option key={i}>{state.name}</option>
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
              defaultValue="india"
              disabled
              placeholder="country"
              required
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
              value={formValues.pin_code}
              onChange={handleChange}
              placeholder="pin code"
              required
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
              value={formValues.latitude}
              onChange={handleChange}
              placeholder="longitute/latitude"
              required
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
              onChange={handleChange}
              required
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
              onChange={handleChange}
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
              onChange={handleChange}
              required
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
              onChange={handleChange}
              multiple
              required
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
