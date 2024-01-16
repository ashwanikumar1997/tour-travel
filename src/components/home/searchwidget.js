/**
 * @author ashwani kumar
 * @email ashwani kumar@inimist.com
 * @create date 2019-09-03 10:50:57
 * @modify date 2023-07-03 10:50:57
 * @desc [description]
 */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

const SearchWidget = () => {
  const [searchPlace, setSearchPlace] = useState([]);
  const [selectedCity, setSelcetedCity] = useState("");
  const [selectedMonth, setmonth] = useState("");
  const [filter, setfilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

const navigate = useNavigate();

  const handleChange = (event) => {
    setSelcetedCity(event.target.value);
  };
  useEffect(() => {
    Axios.get("/places").then((res) => {
      setSearchPlace(res.data);
    });
  }, []);

  const searchFilter = (e) => {
    e.preventDefault();
    if (selectedCity === "" || selectedMonth === "") {
      return;
    } else{
      navigate(`/search-city/${selectedCity}/${selectedMonth}`)
    }
  };

  return (
    <div className="ppb_wrapper hasbg ">
      <div className="one withsmallpadding ppb_tour_search BannerSearchBar">
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <form
                id="tour_search_form"
                className="tour_search_form"
                onSubmit={searchFilter}
              >
                <div className="tour_search_wrapper">
                  <FormControl size="small">
                    <InputLabel id="demo-simple-select-label">
                      Select city
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedCity}
                      label="select city"
                      onChange={handleChange}
                      style={{
                        width: "150px",
                        height: "45px",
                      }}
                    >
                      {searchPlace.map((city, i) => (
                        <MenuItem
                          key={city._id}
                          value={city.city}
                          onChange={(e) => setSelcetedCity(e.target.value)}
                        >
                          {city.city}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <div className="one_fourth themeborder">
                    <select
                      id="month"
                      name="month"
                      onChange={(e) => setmonth(e.target.value)}
                    >
                      <option value="">Any Month</option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>
                    <span className="ti-calendar"></span>
                  </div>
                  <div className="one_fourth themeborder">
                    <select
                      id="sort_by"
                      name="sort_by"
                      onChange={(e) => setfilter(e.target.value)}
                    >
                      <option value="date">Sort By Date</option>
                      <option value="price_low">Price Low to High</option>
                      <option value="price_high">Price High to Low</option>
                      <option value="name">Sort By Name</option>
                      <option value="popular">Sort By Popularity</option>
                      <option value="review">Sort By Review Score</option>
                    </select>
                    <span className="ti-exchange-vertical"></span>
                  </div>
                  <div className="one_fourth last themeborder">
                    <input
                      id="tour_search_btn"
                      type="submit"
                      className="button"
                    />
                  </div>
                  <br className="clear" />
                  <div className="tour_advance_search_wrapper">
                    <div className="one_fourth themeborder">
                      <select id="tourcat" name="tourcat">
                        <option value="">All Categories</option>
                        <option value="mountain">Mountain</option>
                        <option value="rural">Rural</option>
                        <option value="snow-ice">Snow &amp; Ice</option>
                        <option value="wildlife">Wildlife</option>
                      </select>
                      <span className="ti-angle-down"></span>
                    </div>
                    <div className="one_fourth themeborder">
                      <select id="destination_id" name="destination_id">
                        <option value="">Any Destinations</option>
                        <option value="289">Africa</option>
                        <option value="292">Asia</option>
                        <option value="291">Australia</option>
                        <option value="287">Europe</option>
                        <option value="294">North America</option>
                        <option value="293">South America</option>
                      </select>
                      <span className="ti-angle-down"></span>
                    </div>
                    <div className="one_fourth themeborder">
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        placeholder="Max budget ex. 500"
                      />
                      <span>$</span>
                    </div>
                  </div>
                </div>
                <div className="tour_advance_search_wrapper_link">
                  {/* <a id="tour_advance_search_toggle" href="#" className="theme_link_color">
                                            <span className="icon ti-angle-down"></span>
                                            Advanced Search
                                        </a> */}
                                        
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
