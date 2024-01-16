import React from "react";
import FAQ from "./FAQ";


const paragraphcontainer = {
  fontFamily: "Arial sans-serif",
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#333",
  textAlign: "left",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  marginBottom: "15px",
  backgroundColor:"#fff"
};

const paragraphStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  lineHeight: "1.5",
  color: " #585c66",
  textAlign: "left",
  padding: "20px",
};

const AboutHimachalPardesh = () => {
  return (
    <>
      <div style={paragraphcontainer}>
        <h6
          style={{
            fontFamily: "Arial, sans-serif",
            marginLeft: "25px",
            color: "orangered",
            textAlign: "left",
            padding: "8px",
          }}
        >
          About
        </h6>

        <h1
          style={{
            color: "#38404F",
            marginLeft: "28px",
            textAlign: "left",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Himachal Pradesh Tour Packages
        </h1>
        <div>
          <p style={paragraphStyle}>
            Seated right in the lap of the mighty Himalayas, Himachal Pradesh is
            a tourist paradise where you come across the most beautiful and
            diverse faces of nature. Hill stations, valleys, high altitude
            passes, lakes, temples, wildlife sanctuaries, waterfalls, gorgeous
            peaks and a rich colonial legacy, it has everything that a tourist
            needs for a holiday packed with excitement, thrill, adventure and
            sightseeing. We at Tour My India offer the best Himachal Pradesh
            tour packages with attractive deals that are perfect for a family
            vacation, holiday with friends, adventure, and honeymoon tour. With
            our meticulously created Himachal Pradesh vacation packages you can
            be rest assured of a hassle-free and memorable trip. Our expertly
            crafted Himachal Pradesh tour packages guarantee you the best of
            sightseeing tour, adventure & exploration at attractive deals and
            prices. Our extensive knowledge of the regions and destinations of
            Himachal Pradesh have earned us an expertise in designing the best
            holiday packages. Select from our wide range of Himachal holiday
            package which includes a spiritual tour to famous religious sites,
            adventure activities like trekking, paragliding & river rafting,
            hill station tours to explore nature's beauty & travelling to
            offbeat destinations. Those travelling to Himachal Pradesh easily
            fall in love with its charming landscape and gorgeous vistas. The
            beauty of its landscape is complemented by the presence of ancient
            temples, colonial era churches, forts and palaces, all of which are
            a reminder of its rich cultural heritage. Taking a ride on Kalka
            Shimla Heritage Railway and exploring the Great Himalayan Nature
            Park (both UNESCO World Heritage Sites) gift you with memories that
            you will treasure for a lifetime. From Shimla to Chamba, each of the
            scenic hill stations in Himachal have a new experience waiting in
            store for you. Himachal Pradesh is a haven for adventure lovers, and
            offers the ultimate thrill and adrenaline rush with various
            adventure activities like camping, trekking, paragliding, skiing,
            ice skating, mountain cycling, river rafting and rock climbing. Some
            of the top treks of Himachal Pradesh are Kugti Pass and Manimahesh
            Lake treks, while paragliding is best enjoyed in Bir Billing in
            Kangra. Go white water rafting on Beas & Sutlej rivers, or mountain
            biking on trans-Himalayan tracks in Kinnaur and Lahaul-Spiti.
            Tourist can also enjoy the beauty of Himachal Pradesh by catching a
            ride on the Him Darshan Express Tourist Special Train which runs on
            the Kalka-Shimla route and consists of vistadome coaches.
            <br />
            <a
              style={{ textDecoration: "underline", color: "blue",fontFamily:"Arial, sans-serif", }}
              href="https://himtimes.com/50-interesting-facts-about-himachal/"
              target="__blank"
            >
              Know more about himachal pardesh
            </a>
   
          </p>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default AboutHimachalPardesh;
