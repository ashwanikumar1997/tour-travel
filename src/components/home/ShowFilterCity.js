import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../App/AxiosInstance";
import Spinner from "../common/Spinner";
import ContactTravelAgentForm from "../contactagent/ContactTravelAgentForm";

const ShowFilterCity = () => {
  const { city, month } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [filterCity, setFilterCity] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    axiosInstance.get("/places").then((res) => {
      if (res.data) {
        const filterdata = res.data.filter((item) => {
          const itemCity = item.city;
          const itemMonth = item.time; // Extract the month from the date

          return itemCity === city && itemMonth;
        });
        setFilterCity(filterdata);
        setIsLoading(false);
      } else {
        console.log("no data");
      }
    });
  }, [city, setFilterCity]);

  //  const filtered = alldata
  //   if (filtered) {
  //     setFilterCity([filtered]);
  //   } else {
  //     console.log("no data");
  //   }

  return (
    <>
      <div id="page_content_wrapper" className="hasbg ">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {filterCity.map((item) => (
              <div key={item._id}>
                <div style={{ marginTop: "90px" }}>
                  <div
                    id="page_caption"
                    className="hasbg parallax"
                    style={{
                      backgroundImage: `url('${item.city_img}')`,
                    }}
                  >
                    <div className="overlay_background visible"></div>
                    <div className="page_title_wrapper">
                      <div className="page_title_inner">
                        <div className="page_title_content">
                          <h1>{item.city}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "8px",
                    borderRadius: "8px",
                    maxWidth: "630px",
                  }}
                >
                  <div className="tour_attribute_rating">
                    <div className="br-theme-fontawesome-stars-o">
                      <div className="br-widget">
                        <a href="#" className="br-selected"></a>
                        <a href="#" className="br-selected"></a>
                        <a href="#" className="br-selected"></a>
                        <a href="#" className="br-selected"></a>
                        <a href="#"></a>
                      </div>
                    </div>
                    <div className="tour_attribute_rating_count">
                      4&nbsp;reviews
                    </div>
                  </div>
                  <br />
                  <strong>Best time to Visit: {item.time}</strong>
                  <br />
                  <strong>Language: {item.language}</strong>
                  <br />
                  <strong>Temperature: {item.distance}</strong>
                  <br />
                  <button style={{ margin: "10px" }} onClick={handleOpen}>
                    Contact agent
                  </button>
                  <ContactTravelAgentForm
                    handleOpen={handleOpen}
                    open={open}
                    setOpen={setOpen}
                  />
                </div>
                <br />
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <strong
                    style={{
                      textDecoration: "underline",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    About {item.city}
                  </strong>
                  <p style={{ fontWeight: "bolder", textAlign: "justify" }}>
                    {item.city_desc}
                    <br />
                    {/* <span
              style={{
                marginBottom:"30px",
                fontSize: "18px",
                fontWeight: "lighter",
                color: "blue",
                cursor:"pointer",
                float:"left"
              }}
              onClick={handleReadExpand}
            >
              {" "}
              {isExpanded ? "Read Less" : "Read More"}
            </span> */}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
        <div
          className="inner"
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          <div className="inner_wrapper">
            <div className="tour_related">
              <h3 className="sub_title">Related city</h3>
              <div
                id="portfolio_filter_wrapper"
                className="gallery classNameic four_cols portfolio-content section content clearfix"
                data-columns="4"
              ></div>
              <div className="sidebar_content full_width ">
                <blockquote>
                  <p>
                    Santorini is essentially what remains after an enormous
                    volcanic eruption that destroyed the earliest settlements on
                    a formerly single island
                  </p>
                </blockquote>
                <h4 className="p1">
                  <span className="s1">Exploring the Area</span>
                </h4>
                <p className="p2">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse
                  nihil, flexitarian Truffaut synth art party deep v chillwave.
                  Seitan High Life reprehenderit consectetur cupidatat kogi. Et
                  leggings fanny pack, elit bespoke vinyl art party Pitchfork
                  selfies master cleanse Kickstarter seitan retro. Drinking
                  vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo
                  biodiesel Neutra selfies.
                </p>
                <h4 className="p1">
                  <span className="s1">Coastal Adventures</span>
                </h4>
                <p className="p2">
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus.
                </p>
                <div
                  id="attachment_3099"
                  style={{ width: "1450px" }}
                  className="wp-caption alignnone"
                >
                  <img
                    className="size-full wp-image-3099"
                    // src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/uploads/2016/12/pexels-photo-210243.jpeg"
                    alt=""
                    width="1440"
                    height="960"
                  />
                  <p className="wp-caption-text">
                    The road to success and the road to failure are almost
                    exactly the same
                  </p>
                </div>
                <h4 className="p1">
                  <span className="s1">Eating and Drinking</span>
                </h4>
                <p className="p2">
                  See-through delicate embroidered organza blue lining luxury
                  acetate-mix stretch pleat detailing. Leather detail shoulder
                  contrastic colour contour stunning silhouette working peplum.
                  Statement buttons cover-up tweaks patch pockets perennial
                  lapel collar flap chest pockets topline
                </p>
                <h4 className="p2">What to See and Do</h4>
                <p>
                  Foam padding in the insoles leather finest quality staple flat
                  slip-on design pointed toe off-duty shoe. Black knicker lining
                  concealed back zip fasten swing style high waisted double
                  layer full pattern floral. Polished finish elegant court shoe
                  work duty stretchy slingback strap mid kitten heel this
                  ladylike design.
                </p>
                <p>
                  <img
                    className="alignnone size-full wp-image-3560"
                    // src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/uploads/2017/07/pexels-photo-525544.jpeg"
                    alt=""
                    width="1440"
                    height="960"
                  />
                </p>
                <h4 className="p2">Where to Stay</h4>
                <p>
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse
                  nihil, flexitarian Truffaut synth art party deep v chillwave.
                  Seitan High Life reprehenderit consectetur cupidatat kogi. Et
                  leggings fanny pack, elit bespoke vinyl art party Pitchfork
                  selfies master cleanse Kickstarter seitan retro. Drinking
                  vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo
                  biodiesel Neutra selfies.
                </p>
                <h4 className="p1">
                  <span className="s1">How to Get Around</span>
                </h4>
                <p className="p2">
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus.
                </p>
                <div style={{ height: "10px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowFilterCity;
