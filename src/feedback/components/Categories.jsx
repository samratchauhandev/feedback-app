import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Categories({ label, options }) {

  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>{label}</Typography>

      <Box>
        {options.map(({subLabel}, idx) => (
          <Button
            key={idx}
            sx={{
              width: "115px",
              border: "1px solid #00000052",
              mx: "10px",
              color: "#504F4F",
            }}
          >
            {subLabel}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default Categories;
