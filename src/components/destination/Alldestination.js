import React from "react";

const Alldestination = ({placeContent}) => {

    console.log("props",placeContent);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <li>Shimla</li>
      <li>Manali</li>
      <li>Dharamshala</li>
      <li>Khajjiar</li>
    </div>
  );
};

export default Alldestination;
