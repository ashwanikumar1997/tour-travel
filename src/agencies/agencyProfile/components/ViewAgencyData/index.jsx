import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Axios from "axios";

export default function BasicTable() {
  const [data, setData] = useState({});
  localStorage.setItem ("agency-name",data.agency_name)
  const [isEdit, setEdit] = useState(false);
  const userId = localStorage.getItem("authID").replace(/"/g, "");
  useEffect(() => {
    Axios.get(`/agencies/${userId}`)
      .then((res) => {
        setData(res.data);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);




  const handleFieldChange = (fieldName, value) => {
    setData({
      ...data,
      [fieldName]: value,
    });
  
  };

const handleSaveData =()=>{
console.log();
setEdit(false)
}


  return (
    <>
      {isEdit ? (
        <div>
          <form>
            <label>Agency Owner.</label>
            <input
              value={data.agencyOwner}
              onChange={(e) => handleFieldChange("agencyOwner", e.target.value)}
            />
            <label>Year of Founding.</label>
            <input value={data.yearOfFounding}
            onChange={(e) => handleFieldChange("yearOfFounding", e.target.value)}
            />
            <label>Address.</label>
            <input 
            value={data.address}
            onChange={(e) => handleFieldChange("address", e.target.value)}
            />
            <label>Phone No.</label>
            <input 
            value={data.phoneNumber1}
            onChange={(e) => handleFieldChange("phoneNumber1", e.target.value)}
            />
            <label>Email</label>
            <input 
            value={data.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            />
            <label>Pin Code.</label>
            <input 
            value={data.pin_code}
            onChange={(e) => handleFieldChange("pin_code", e.target.value)}
            />
            <br />
            <button onClick={handleSaveData}>Update Data</button>
            {" "}
            <button onClick={()=> setEdit(false)}>Back</button>
          </form>
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Agency Owner</TableCell>
                <TableCell>Agency Name</TableCell>
                <TableCell align="right">Year of Founding</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Phone No.</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Agency GSTIN</TableCell>
                <TableCell align="right">Registration No.</TableCell>
                <TableCell align="right">Pin Code</TableCell>
                <TableCell align="right">Document Upload</TableCell>
                <TableCell align="right" style={{ color: "red" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.agencyOwner}
                </TableCell>
                <TableCell align="right">{data.agency_name}</TableCell>
                <TableCell align="right">{data.yearOfFounding}</TableCell>
                <TableCell align="right">
                  {data.address},<br />
                  {data.city},<br />
                  {data.state},<br />
                  {data.country}
                </TableCell>
                <TableCell align="right">{data.phoneNumber1}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.Agency_GSTN}</TableCell>
                <TableCell align="right">{data.regNumber}</TableCell>
                <TableCell align="right">{data.pin_code}</TableCell>
                <TableCell align="right">{data.pin_code}</TableCell>
                <TableCell align="right">
                  <span
                    style={{
                      backgroundColor: "skyblue",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => setEdit(true)}
                  >
                    Edit
                  </span>
                  <br />
                  <br />
                  <span
                    onClick={console.log("id", data._id)}
                    style={{
                      backgroundColor: "red",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
