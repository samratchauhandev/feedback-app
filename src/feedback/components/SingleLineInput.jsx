import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function SingleLineInput({ label }) {
  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
        {label}
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        sx={{
          marginBottom: "12px",
          '& .MuiOutlinedInput-root': {
            height:'36px',
            '& fieldset': {
              borderColor: '#DBD6D6',
            },
            '&:hover fieldset': {
              borderColor: '#A9A9A9',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#5578F4',
            },
          },
        }}
      />
    </Box>
  );
}

export default SingleLineInput;
