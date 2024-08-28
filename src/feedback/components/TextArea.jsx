import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function TextArea({label}) {

  return (
    <Box>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
          my: 1,
        }}
      >
        {label}
      </Typography>
      <TextField
        multiline
        minRows={4}
        maxRows={8}
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderColor: '#DBD6D6',
            '&:hover fieldset': {
              borderColor: '#DBD6D6',
            },
          },
        }}
      />
    </Box>
  );
}

export default TextArea;
