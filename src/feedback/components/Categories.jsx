import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Categories({ label }) {
  const categories = ["Bug", "Content", "Other"];

  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>{label}</Typography>

      <Box>
        {categories.map((item, idx) => (
          <Button
            key={idx}
            sx={{
              width: "115px",
              border: "1px solid #00000052",
              mx: "10px",
              color: "#504F4F",
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default Categories;
