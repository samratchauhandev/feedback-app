import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const customIcons = {
  1: {
    icon: SentimentVeryDissatisfiedIcon,
    label: "Very Dissatisfied",
  },
  2: {
    icon: SentimentDissatisfiedIcon,
    label: "Dissatisfied",
  },
  3: {
    icon: SentimentSatisfiedIcon,
    label: "Neutral",
  },
  4: {
    icon: SentimentSatisfiedAltIcon,
    label: "Satisfied",
  },
  5: {
    icon: SentimentVerySatisfiedIcon,
    label: "Very Satisfied",
  },
};

function SmileyRating({ label }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (key) => {
    setSelected(key);
  };

  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
        {label}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        {Object.keys(customIcons).map((key) => {
          const IconComponent = customIcons[key].icon;
          const isSelected = selected === parseInt(key);
          return (
            <Box
              key={key}
              sx={{
                mx: 1,
                cursor: "pointer",
                transform: isSelected ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.2s",
              }}
              onClick={() => handleClick(parseInt(key))}
            >
              <IconComponent
                sx={{
                  fontSize: "30px",
                  color: isSelected ? "#5578F4" : "#888888",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SmileyRating;
