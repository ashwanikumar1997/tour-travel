import React, { useState, useEffect } from "react";
import axiosInstance from "../../App/AxiosInstance";
import { Link, useNavigate } from "react-router-dom";
import IsLoading from "../../elements/Loading";
import "./search.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState([]);
  const [error, setError] = useState(null);
  const [keyvalue, setKeyvalue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        if (!searchInput) {
          return;
        } else {
          const response = await axiosInstance.get(
            "/places/search?place=" + searchInput
          );
          console.log(response)
          setCity(response.data);
        }
      })();
    } catch (error) {
      console.log("error in searching city", error);
      setLoading(true);
      setError(error);
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

          {error && loading ? (
            <IsLoading />
          ) : searchInput === "" ? null : (
            <p className="cityparagraph">
              {city.map((city) => (
                <div key={city._id}>
                  {keyvalue === "Enter" ? (
                    navigate(`/home/places/${city._id}`)
                  ) : (
                    <Link
                      className="text"
                      to={`/home/places/${city._id}`}
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
