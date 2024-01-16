import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { topTenPlace } from "./TopTenPlaceforFamily";

export default function FAQ() {
  const [expandIcon, setExpendicon] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpendicon(newExpanded ? panel : false);
  };

  return (
    <div style={{ marginBottom: "20px", maxWidth: "750px"}}>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "x-large",
          textAlign: "left",
          padding: "8px",
          marginBottom: "15px",
          color: "#38404F",
        }}
      >
        Frequently Asked Questions
      </h1>
      <Accordion
        expanded={expandIcon === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          expandIcon={expandIcon === "panel1" ? "-" : "+"}
          id="panel1a-header"
        >
          <Typography>
            <h3
              style={{ color: "#585c66", fontSize: "16px", fontWeight: "bold" }}
            >
              <span style={{ color: "orangered" }}>Q.</span>&nbsp; When is the
              best time to Visit Himachal Pradesh?
            </h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", color: "#585c66" }}>
            Himachal Pradesh is a popular tourist destination in North India and
            can be visited in any of the seasons. However, accessing the upper
            part of Himachal like Lahaul & Spiti becomes a bit difficult during
            the winter season between October and May.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandIcon === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={expandIcon === "panel2" ? "-" : "+"}
        >
          <Typography>
            <h3
              style={{
                textAlign: "left",
                color: "#585c66",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onChange={() => setExpendicon(false)}
            >
              <span style={{ color: "orangered" }}>Q.</span>&nbsp;What are the
              most peaceful places to visit in Himachal?
            </h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", color: "#585c66" }}>
            Himachal Pradesh altogether is a peaceful destination to visit,
            however, its less-crowded parts like Kinnaur, Lahaul & Spiti, Banjar
            Valley, and Tirthan Valley can guarantee the most peaceful holiday.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandIcon === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={expandIcon === "panel3" ? "-" : "+"}
        >
          <Typography>
            <h3
              style={{
                textAlign: "left",
                color: "#585c66",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onChange={() => setExpendicon(false)}
            >
              <span style={{ color: "orangered" }}>Q.</span>&nbsp; When does it
              snow in Himachal?
            </h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", color: "#585c66" }}>
            Ideally, snowfall begins in the upper part of Himachal from the
            month of October. In the lower regions of the state, snowfall begins
            in the month of December.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandIcon === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={expandIcon === "panel4" ? "-" : "+"}
        >
          <Typography>
            <h3
              style={{
                textAlign: "left",
                color: "#585c66",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onChange={() => setExpendicon(false)}
            >
              <span style={{ color: "orangered" }}>Q.</span>&nbsp; When is the
              best season for adventure like skiing, paragliding & rafting in
              Himachal?
            </h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", color: "#585c66" }}>
            Skiing can be best enjoyed between mid-December and February in
            Himachal. For rafting, June is the best month, and paragliding can
            be best relished from April to June and October to November.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandIcon === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          expandIcon={expandIcon === "panel5" ? "-" : "+"}
        >
          <Typography>
            <h3
              style={{
                textAlign: "left",
                color: "#585c66",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onChange={() => setExpendicon(false)}
            >
              <span style={{ color: "orangered" }}>Q.</span>&nbsp; What are the
              top 10 recommended places for a Family Vacation in Himachal?
            </h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", fontFamily:"sans-serif" }}>
            <h6 style={{ padding: "0px 10px 10px",color: "#585c66" }}>
              The top 10 places for a family vacation in Himachal are:
            </h6>

            {topTenPlace.map((topPlace) => (
              <div key={topPlace.name}>
                <ul style={{ padding: "0px 7px 7px",marginLeft:"15px" }}>
                  {" "}
                  <li style={{ color: "orangered",  }}>
                    <a href="#" style={{color:"#585c66",fontWeight:"bold",fontSize:"15px"}}>{topPlace.name}</a>{" "}
                    <span style={{ color: "#585c66", fontSize:"14px"}}>- {topPlace.content}</span>
                  </li>
                </ul>
              </div>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
