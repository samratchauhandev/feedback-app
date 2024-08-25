import { Box,Typography } from "@mui/material";
import React from "react";
import Edit_And_DeleteComponent from "../../components/Edit_And_DeleteComponent";

function SingleLineInput() {
  return (
    <Box sx={{ my: 2, p: 1, boxShadow: "0px 2px 4px 0px #00000040" }}>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
      Do you have any suggestions to improve our website?
      </Typography>
      <input  style={{width:'100%',height:'36px', marginBottom:'12px',border: '1px solid #DBD6D6', }}/>
      <Edit_And_DeleteComponent />
    </Box>
  );
}

export default SingleLineInput;

