/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:57
 * @modify date 2019-09-03 10:56:57
 * @desc [description]
 */
import React, { Suspense, lazy } from "react";
import jwt_decode from "jwt-decode";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import About from "../components/about";
import Contact from "../components/contact";
import Articles from "../components/Articles";
import TestFile from "../components/TestFile";
import SingleArticles from "../components/singlearticles";
import Login from "../components/signup/LoginForm";
import Register from "../components/signup/Register";
import VendorProfile from "../agencies/agencyProfile/AgencyProfile";
import "./App.css";
import PageNotFound from "../components/layout/PageNotFound";
import Vendor from "../agencies/index";
import VendorRegistrationForm from "../agencies/AgencyForm/AgencyForm";
import Footer from "../components/layout/Footer";
import AddTourPackagesView from "../agencies/agencyProfile/AddPackageView";
import VendorRoute from "./VendorRoute";
import AlertUserNull from "./alertNullUserLogin";
import Loader from "../utils/Loader";
import UserRoute from "./UserRoute";
import AgencyAllDataManaged from "../agencies/ViewAgency/inventory/AgencyAllDataManaged";
import { TourBookedStatus } from "../agencies/ViewAgency/tourBooking/TourBookedStatus";
import { flushUserSession } from "../actions/authActions";
const Landing = lazy(() => import("../components/Landing"));
const Destination = lazy(() => import("../components/destination"));
const Tours = lazy(() => import("../components/tours"));
const SingleTour = lazy(() => import("../components/singletour"));
const SelectedCityShow = lazy(() =>
  import("../components/destination/SelectedCityShow")
);
const ShowFilterCity = lazy(() => import("../components/home/ShowFilterCity"));

const token = localStorage.getItem("authToken");

const agentZone = [
  "/agency/himalayan-tour-and-travel",
  "/agency/himalayan-tour-and-travel/agency-details-form",
  "/agency/himalayan-tour-and-travel/vendor-profile",
];

if (token) {
  const decoded = jwt_decode(token);
  const currentTime = Date.now() / 1000;
  // console.log("decode",decoded.exp > currentTime)
  if (decoded.exp < currentTime) {
    flushUserSession();
    window.location.reload();
  }
}

const App = () => {
  const userRole = localStorage.getItem("auth_account_type");
  //  const token = localStorage.getItem("authToken")
  // if (userRole == "Agency Admin") {
  //   navigate("/agency/himalayan-tour-and-travel");
  // }
  // const decodeToken = jwt_decode(token)
  // const currentTime = Math.floor(Date.now() / 1000);
  // console.log(decodeToken.exp < currentTime);
  // if (decodeToken.exp && currentTime >= decodeToken.exp) {
  //   // console.log(token);

  // } else {
  //   console.log("error");
  // }

  return (
    <>
      {/* {agentZone.includes(location.pathname)} */}
      <AlertUserNull userRole={userRole} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={<UserRoute role="Personal" userRole={userRole} />}
        >
          <Route path="/home/destination" element={<Destination />} />
          <Route path="/home/places/:placeid" element={<SelectedCityShow />} />
          <Route path="/home/tours" element={<Tours />} />
          <Route path="/home/tours/:id" element={<SingleTour />} />
          <Route path="/home/about" element={<About />} />
          <Route path="/home/contact" element={<Contact />} />
          <Route path="/home/articles" element={<Articles />} />
          <Route path="/home/articles/:id" element={<SingleArticles />} />
          <Route path="/home/TestFile" element={<TestFile />} />
          <Route
            path="/homesearch-city/:city/:month"
            element={<ShowFilterCity />}
          />
        </Route>
        <Route
          path="/agency"
          element={<VendorRoute role="Agency Admin" userRole={userRole} />}
        >
          <Route
            path="/agency/himalayan-tour-and-travel"
            element={<Vendor />}
          ></Route>
          <Route
            path="/agency/himalayan-tour-and-travel/agency-details-form"
            element={<VendorRegistrationForm />}
          />
          <Route
            path="/agency/himalayan-tour-and-travel/add-tour-packages"
            element={<AddTourPackagesView />}
          ></Route>
          <Route
            path="/agency/himalayan-tour-and-travel/check-tour-status"
            element={<TourBookedStatus/>}
          ></Route>
          <Route
            path="/agency/himalayan-tour-and-travel/vendor-profile"
            element={<VendorProfile />}
          />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      {/* {userRole === "Personal" && <Footer/>} */}
    </>
  );
};

const AppProvider = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  );
};

export default AppProvider;
