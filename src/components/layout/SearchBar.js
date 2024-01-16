import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./search.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [city, setCity] = useState([]);
  const [keyvalue, setKeyvalue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const reponse = await Axios.get("/places/search?place=" + searchInput);
        setCity(reponse.data);
      })();
    } catch (error) {
      console.log("error in searching city", error);
    }
  }, [searchInput]);

  return (
    <>
      <div id="menu_search">
        <div className="menu_search_wrapper">
          <div
            id="menu_search_form"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "8px",
            }}
          >
            <i className="fa fa-search"></i>
            <input
              type="text"
              style={{ color: "black" }}
              className="field searchform-s"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              id="s"
              name="s"
              placeholder="search counrty"
              onKeyPress={(e) => {
                setKeyvalue(e.key);
              }}
            />
          </div>

          {searchInput === "" ? null : (
            <p className="cityparagraph">
              {city.map((city) => (
                <div key={city._id}>
                  {keyvalue === "Enter" ? (
                    navigate(`/places/${city._id}`)
                  ) : (
                    <Link
                      className="text"
                      to={`/places/${city._id}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSearchInput("")}
                    >
                      {city.city}
                    </Link>
                  )}
                </div>
              ))}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
