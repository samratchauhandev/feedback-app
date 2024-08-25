import { Box, Typography } from "@mui/material";
import React from "react";
import Categories from "./formComponents/Categories";
import TextArea from "./formComponents/TextArea";
import NumericRating from "./formComponents/NumericRating";
import StarRating from "./formComponents/StarRating";
import SmileyRating from "./formComponents/SmileyRating";
import SingleLineInput from "./formComponents/SingleLineInput";
import RadioButton from "./formComponents/RadioButton";
import LeftHandArrowSvg from "../svg/LeftHandArrowSvg";
import EditSvg from "../svg/EditSvg";

function FeedBackForm() {
  return (
    <Box
      sx={{
        width: "500px",
        backgroundColor: "#FFFFFF",
        m: "47px auto 0 auto",
        boxShadow: "0px 4px 4px 0px #00000040",
        borderRadius: "15px",
        pb:'100px',
      }}
    >
      <Box
        sx={{
          backgroundColor: "#5578F4",
          color: "#FFFFFF",
          height: "74px",
          borderRadius: "15px 15px 0 0",
          display:'flex',
          alignItems:'center',
          pl:4
        }}
      >
        <LeftHandArrowSvg />
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "500",
            px:2
          }}
        >
          Generic Website Rating
        </Typography>
        <EditSvg />
      </Box>
      <Box
        sx={{ p: "22px 12px 0 15px", display: "flex", flexDirection: "column" }}
      >
        <TextArea />
        <NumericRating />
        <StarRating />
        <SmileyRating />
        <SingleLineInput />
        <RadioButton />
        <Categories />
      </Box>
    </Box>
  );
}

export default FeedBackForm;
