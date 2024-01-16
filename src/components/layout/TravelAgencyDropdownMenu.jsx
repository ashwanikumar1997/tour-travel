import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { UserIcon } from "../../assets/icons";

export default function SelectSmall() {
  const [TravelAgentzone, setTravelAgentzone] = React.useState("");

  const handleChange = (event) => {
    setTravelAgentzone(event.target.value);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          style={{ backgroundColor: "#333", border: "none" }}
          id="dropdown-basic"
        >
          <UserIcon style={{ maxHeight: "12px" }} />
          <span style={{ marginLeft: "1px" }}>Travel Agent Zone</span>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{padding:"5px"}}>
          <Dropdown.Item href="/agency/himalayan-tour-and-travel/add-tour-packages">
            Join For Free
          </Dropdown.Item>
          <hr />
          <Dropdown.Item href="/">Sign In</Dropdown.Item>
          <hr />
          <Dropdown.Item href="/">Something else</Dropdown.Item>
          <hr />
          <Dropdown.Item href="/agency/himalayan-tour-and-travel/add-tour-packages">
            Add Tour Packages Free
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
