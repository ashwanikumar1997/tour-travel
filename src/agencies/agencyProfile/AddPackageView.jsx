import React from "react";
import AddTourPackages from "./components/AddTourPackages";
import WhyChooseUs from "../../components/home/whychooseus";

const AddPackageView = () => {
  return (
    <div style={{display:"flex",flexWrap:"wrap", alignItems:"center",justifyContent:"center", marginBottom:"15px"}}>
      <div>
        <AddTourPackages />
      </div>
      <div style={{ backgroundColor: "#fff", marginTop: "10px",width:"70%" }}>
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default AddPackageView;
