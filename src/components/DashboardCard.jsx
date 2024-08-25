import { Box, Typography } from "@mui/material";
import React from "react";
import PlusSvg from "../svg/PlusSvg";

function DashboardCard() {
  return (
    <Box
      sx={{
        width: "306px",
        height: "379px",
        boxShadow: "0px 4px 4px 0px #00000040",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          mt: "140px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PlusSvg />
        <Typography sx={{ fontSize: 32, fontWeight: 500, mt: '26px' }}>New form</Typography>
      </Box>
    </Box>
  );
}

export default DashboardCard;
