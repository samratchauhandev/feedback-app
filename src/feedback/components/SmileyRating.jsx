import { Box, Typography } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function SmileyRating({label}) {
  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
        {label}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        {Object.keys(customIcons).map((key) => (
          <Box key={key} sx={{ mx: 1 }}>
            {customIcons[key].icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SmileyRating;
