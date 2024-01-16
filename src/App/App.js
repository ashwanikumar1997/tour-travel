/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:57
 * @modify date 2019-09-03 10:56:57
 * @desc [description]
 */
import React, { Suspense, useState } from "react";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "../actions/authActions";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
// import PrivateRoute from "../components/common/PrivateRoute";

import Landing from "../components/Landing";
import Destination from "../components/destination";
import SingleDestination from "../components/destination/single-destination";
import setAuthToken from "../utils/setAuthToken";
import Tours from "../components/tours";
import SingleTour from "../components/singletour";
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
import Navbar from "../components/layout/Navbar";
import AddTourPackagesView from "../agencies/agencyProfile/AddPackageView";
import AgencyTopbar from "../agencies/topbar/components/Topbar";
import SelectedCityShow from "../components/destination/SelectedCityShow";
import ShowFilterCity from "../components/home/ShowFilterCity";
import AlertUserNull from "./alertNullUserLogin";
import PrivateRoute from "./PrivateRoute";

const token = localStorage.getItem("authToken");

const agentZone = [
  "/agency/himalayan-tour-and-travel",
  "/agency/himalayan-tour-and-travel/agency-details-form",
  
  "/agency/himalayan-tour-and-travel/vendor-profile",
];

if (token) {
  // Set auth token header auth

  // setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  // store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  //const currentTime = Date.now() / 1000;
}

const App = () => {
  const userRole = localStorage.getItem("auth_account_type");
  const location = useLocation();
  console.log(location.pathname);
  //  const token = localStorage.getItem("authToken")

  // const decodeToken = jwt_decode(token)
  // const currentTime = Date.now() / 1000;
  // // console.log(decodeToken.exp,currentTime);
  // if (decodeToken.exp && currentTime >= decodeToken.exp) {
  //   // console.log(token);

  // } else {
  //   console.log("error");
  // }

  return (
    <>
      {(userRole === "Personal" && <Navbar />) ||
        (userRole === null && <Navbar />) ||
        (agentZone.includes(location.pathname) && <Navbar />)}
      <AlertUserNull userRole={userRole} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/destination" element={<Destination />} />
          <Route path="/places/:placeid" element={<SelectedCityShow />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<SingleTour />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<SingleArticles />} />
          <Route path="/TestFile" element={<TestFile />} />
          <Route path="search-city/:city/:month" element={<ShowFilterCity />} />
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
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  );
};

export default AppProvider;
