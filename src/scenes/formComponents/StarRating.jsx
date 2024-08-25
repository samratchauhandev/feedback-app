import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import Edit_And_DeleteComponent from "../../components/Edit_And_DeleteComponent";

function StarRating() {
  return (
    <Box sx={{ my: 2, p: 1, boxShadow: "0px 2px 4px 0px #00000040" }}>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
        Give a star rating for the website.
      </Typography>
      <Rating
        name="customized-rating"
        value={null}
        sx={{
          "& .MuiRating-icon": {
            fontSize: "40px",  
            marginRight: "8px",  
          },
        }}
      />
      <Edit_And_DeleteComponent />
    </Box>
  );
}

export default StarRating;

