import * as React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function IsLaoding() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
