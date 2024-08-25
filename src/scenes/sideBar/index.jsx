import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import TextAreaSvg from "../../svg/TextAreaSvg";
import NumericRatingSvg from "../../svg/NumericRatingSvg";
import StarRatingSvg from "../../svg/StarRatingSvg";
import SmileyRatingSvg from "../../svg/SmileyRatingSvg";
import SingleLineInputSvg from "../../svg/SingleLineInputSvg";
import RadioButtonSvg from "../../svg/RadioButtonSvg";
import CategoriesSvg from "../../svg/CategoriesSvg";
import PlusSvg from "../../svg/PlusSvg";

function SideBar() {
  const addFields = [
    "Textarea",
    "Numeric rating",
    "Star rating",
    "Smiley rating",
    "Single line input",
    "Radio button",
    "Categories",
  ];

  const svgs = [
    TextAreaSvg,
    NumericRatingSvg,
    StarRatingSvg,
    SmileyRatingSvg,
    SingleLineInputSvg,
    RadioButtonSvg,
    CategoriesSvg,
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        top: 67,
        width: "317px",
        height: "100%",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px 0px #00000040",
        pl: "34px",
        pt: 3,
        pr: 3,
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "600", mb: 2 }}>
          Add fields
        </Typography>
        <Box paddingTop="24px">
          {addFields.map((item, idx) => {
            const SvgComponent = svgs[idx];
            return (
              <Box
                key={idx}
                display="flex"
                justifyContent={"space-between"}
                mb={2}
              >
                <Box display="flex">
                  <SvgComponent />
                  <Typography sx={{ ml: 2 }}>{item}</Typography>
                </Box>
                <PlusSvg sx={{ width: "21px", height: "22px" }} />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{mt:10}}>
        <Typography fontSize="20px" fontWeight="600">
          Add logic
        </Typography>
        <Box>
          <Box sx={{my:2}}>
            <Typography fontSize="14px">Show based on URL conditions</Typography>
            <TextField
              id="standard-basic"
              variant="standard"
              placeholder="http://"
            />
          </Box>
          <Box sx={{my:2}}>
            <Typography fontSize="14px" >Show on a specific date</Typography>
            <TextField
              id="outlined-basic"
              label="Start date"
              variant="outlined"
              placeholder="MM/DD/YYYY"
            />
          </Box>
          <Box sx={{my:2}}>
            <Typography fontSize="14px">Show on a specific time</Typography>
            <TextField
              id="outlined-basic"
              label="Select Time"
              variant="outlined"
              placeholder="hh:mm aa"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
