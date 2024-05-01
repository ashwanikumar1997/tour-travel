import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import axiosInstance from "../../../../App/AxiosInstance";

export default function BasicTable() {
  const [data, setData] = useState();
  const [update, setUpdate] = useState({});
  const [isEdit, setEdit] = useState(false);

  const userId = localStorage.getItem("authID")?.replace(/"/g, "");

  useEffect(() => {
    axiosInstance
      .get(`/agencies/${userId}`)
      .then((res) => {
        setData(res.data.data);
        localStorage.setItem("agency-name", res.data.data.agency_name);
        localStorage.setItem("agencyId", res.data.data._id);
        localStorage.setItem("agency-logo", res.data.data.logoUpload || "");
        localStorage.setItem("agency-banner", res.data.data.profileImage || "");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleFieldChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveData = () => {
    console.log(data);
    // setEdit(false);
  };

  const handleAgencyDelete = async (id) => {
    try {
      await axiosInstance.delete(`/agencies/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data ? (
        isEdit ? (
          <div>
            <form>
              <label>Agency Owner.</label>
              <input
                name="agencyOwner"
                value={data.agencyOwner}
                onChange={handleFieldChange}
              />
              <label>Year of Founding.</label>
              <input
                name="yearOfFounding"
                value={data.yearOfFounding}
                onChange={handleFieldChange}
              />
              <label>Address.</label>
              <input
                value={data.address}
                name="address"
                onChange={handleFieldChange}
              />
              <label>Phone No.</label>
              <input
                value={data.phoneNumber1}
                name="phoneNumber1"
                onChange={handleFieldChange}
              />
              <label>Email</label>
              <input
                value={data.email}
                name="email"
                onChange={handleFieldChange}
              />
              <label>Pin Code.</label>
              <input
                name="pin_code"
                value={data.pin_code}
                onChange={handleFieldChange}
              />
              <br />
              <button onClick={handleSaveData}>Update Data</button>{" "}
              <button onClick={() => setEdit(false)}>Back</button>
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
                    <button
                      style={{
                        backgroundColor: "skyblue",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => setEdit(true)}
                    >
                      Edit
                    </button>
                    <br />
                    <br />
                    {/* <button
                      type="button"
                      onClick={() => handleAgencyDelete(data.data._id)}
                      style={{
                        backgroundColor: "red",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button> */}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )
      ) : (
        <Link to="/agency/himalayan-tour-and-travel/agency-details-form">
          Add Your Agency
        </Link>
      )}
    </>
  );
}
