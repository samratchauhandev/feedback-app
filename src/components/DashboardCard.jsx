import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import PlusSvg from "../svg/PlusSvg";
import { Link } from "react-router-dom";

function DashboardCard() {

  const [formHeading, setFormHeading] =useState(false)

  const handelFormHeading = () =>{

    setFormHeading((prev)=> !prev)
  }


  return (
    !formHeading ?(<Box
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
        {/* <Link to="/forms/edit_forms">
        </Link> */}
          <PlusSvg sx={{cursor:'pointer'}} onClick={handelFormHeading}/>
        <Typography sx={{ fontSize: 32, fontWeight: 500, mt: "26px" }}>
          New form
        </Typography>
      </Box>
    </Box>) :
    (<Box sx={{width:'100%', height:'100vh', display:"flex", justifyContent:'center', alignItems:'center'}}>
      <Box>
        Dilog model
      </Box>
    </Box>)
  );
}

export default DashboardCard;
