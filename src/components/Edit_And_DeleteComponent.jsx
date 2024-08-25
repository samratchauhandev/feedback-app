import { Box } from "@mui/material";
import React from "react";
import EditSvg from "../svg/EditSvg";
import DeleteSvg from "../svg/DeleteSvg";

function Edit_And_DeleteComponent() {
  return (
    <Box sx={{ display: "flex", justifyContent: "end", p: "10px" }}>
      <EditSvg sx={{ mr: 3, color: "#857a7ac9" }} />
      <DeleteSvg sx={{ color: "#857a7ac9" }} />
    </Box>
  );
}

export default Edit_And_DeleteComponent;
