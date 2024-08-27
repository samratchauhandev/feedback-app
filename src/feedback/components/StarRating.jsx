import { Box, Rating, Typography } from "@mui/material";
import React from "react";

function StarRating({label}) {
  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
        {label}
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
    </Box>
  );
}

export default StarRating;
