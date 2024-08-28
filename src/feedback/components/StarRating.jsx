import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";

function StarRating({ label }) {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };
  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>{label}</Typography>
      <Rating
        name="customized-rating"
        value={rating}
        onChange={handleRatingChange}
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
