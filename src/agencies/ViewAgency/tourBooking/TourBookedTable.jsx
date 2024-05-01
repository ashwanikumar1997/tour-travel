import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'; // Import MenuItem for the dropdown menu
import Select from '@mui/material/Select';


const statusDataFromBackend = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'journey' },
  { id: 3, status: 'fulfilled' },
  // Add more status data as needed
];




const columns = [
  { id: "id", label: "Id", minWidth: 80 },
  { id: "tourTitle", label: "Tour Title", minWidth: 170 },
  { id: "tourPackageAmount", label: "Tour Package Amount", minWidth: 100 },
  {
    id: "fromCity",
    label: "Starting City",
    minWidth: 80,
    align: "right",
  },
  {
    id: "endTourCity",
    label: "End Tour City",
    minWidth: 80,
    align: "right",
  },
  {
    id: "tourDuration",
    label: "Tour Duration",
    minWidth: 150,
    align: "right",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
  },
];

function createData(
  id,
  tourTitle,
  tourPackageAmount,
  fromCity,
  endTourCity,
  tourDuration
) {
  return {
    id,
    tourTitle,
    tourPackageAmount,
    fromCity,
    endTourCity,
    tourDuration,
  };
}

const rows = [
  createData(1, "Shimla to Kufri", 10000, "shimla", "Kufri", "2 days, 1 night"),
  createData(
    2,
    "Manali to Rohtang",
    15000,
    "manali",
    "rohtang",
    "2 days, 1 night"
  ),
  createData(
    3,
    "Dharamshalla to khajjar",
    18000,
    "dharamshala",
    "khajjar",
    "2 days, 1 night"
  ),
  createData(4, "Shimla to Kufri", 10000, "shimla", "Kufri", "2 days, 1 night"),
  createData(5, "Shimla to Kufri", 10000, "shimla", "Kufri", "2 days, 1 night"),
  createData(6, "Shimla to Kufri", 10000, "shimla", "Kufri", "2 days, 1 night"),
  createData(7, "Shimla to Kufri", 10000, "shimla", "Kufri", "2 days, 1 night"),
  createData(8, "Shimla to Kufri", 10000, "shimla", "Kufri", "2 days, 1 night"),
  createData(9, "Shimla to Kufri", 10000, "shimla", "Kufri", "2 days, 1 night"),
  createData(
    10,
    "Shimla to Kufri",
    10000,
    "shimla",
    "Kufri",
    "2 days, 1 night"
  ),
  createData(
    11,
    "Shimla to Kufri",
    10000,
    "shimla",
    "Kufri",
    "2 days, 1 night"
  ),
  createData(
    12,
    "Shimla to Kufri",
    10000,
    "shimla",
    "Kufri",
    "2 days, 1 night"
  ),
  createData(
    13,
    "Shimla to Kufri",
    10000,
    "shimla",
    "Kufri",
    "2 days, 1 night"
  ),
  createData(
    14,
    "Shimla to Kufri",
    10000,
    "shimla",
    "Kufri",
    "2 days, 1 night"
  ),
  createData(
    15,
    "Shimla to Kufri",
    10000,
    "shimla",
    "Kufri",
    "2 days, 1 night"
  ),
];

export default function TourBookedTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function updateRowsWithStatusDataFromBackend(rows, statusDataFromBackend) {
    rows.forEach(row => {
      const statusObject = statusDataFromBackend.find(status => status.id === row.id);
      if (statusObject) {
        row.status = statusObject.status;
      }
    });
  }

  React.useEffect(() => {
    // Simulated status data from the backend
    const statusDataFromBackend = [
      { id: 1, status: 'pending' },
      { id: 2, status: 'journey' },
      { id: 3, status: 'fulfilled' },
      // Add more status data as needed
    ];

    // Update the rows array with the status data from the backend
    updateRowsWithStatusDataFromBackend(rows, statusDataFromBackend);
  }, []); 
  const handleStatusChange = (event, row) => {
    row.status = event.target.value;
    console.log(`${row.name} status changed to ${row.status}`);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "action") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                             <Select
                              value={row.status}
                              onChange={(event) => handleStatusChange(event, row)}
                              displayEmpty
                              inputProps={{ 'aria-label': 'Select Status' }}
                            >
                              <MenuItem value="" disabled>
                                Select Status
                              </MenuItem>
                              <MenuItem value="pending">Pending</MenuItem>
                              <MenuItem value="journey">Journey</MenuItem>
                              <MenuItem value="fulfilled">Fulfilled</MenuItem>
                            </Select>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
