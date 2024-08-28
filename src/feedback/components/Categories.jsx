import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

function Categories({ label, options }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (subLabel) => {
    setSelectedCategory(subLabel);
  };

  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>{label}</Typography>

      <Box>
        {options.map(({ subLabel }, idx) => (
          <Button
            key={idx}
            onClick={() => handleCategoryClick(subLabel)}
            sx={{
              width: "115px",
              border:
                selectedCategory === subLabel
                  ? "2px solid #000000"
                  : "1px solid #00000052",
              mx: "10px",
              color: selectedCategory === subLabel ? "#000000" : "#504F4F",
              backgroundColor:
                selectedCategory === subLabel ? "#E0E0E0" : "transparent",
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
