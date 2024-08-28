import { Box, Typography } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const customIcons = {
  1: {
    icon: SentimentVeryDissatisfiedIcon,
    label: "Very Dissatisfied",
    fontSize: '30px',
  },
  2: {
    icon: SentimentDissatisfiedIcon,
    label: "Dissatisfied",
    fontSize: '30px',
  },
  3: {
    icon: SentimentSatisfiedIcon,
    label: "Neutral",
    fontSize: '30px',
  },
  4: {
    icon: SentimentSatisfiedAltIcon,
    label: "Satisfied",
    fontSize: '30px',
  },
  5: {
    icon: SentimentVerySatisfiedIcon,
    label: "Very Satisfied",
    fontSize: '30px',
  },
};

function SmileyRating({ label }) {
  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
        {label}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        {Object.keys(customIcons).map((key) => {
          const IconComponent = customIcons[key].icon;
          return (
            <Box key={key} sx={{ mx: 1 }}>
              <IconComponent sx={{ fontSize: customIcons[key].fontSize ,color: '#888888' }} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SmileyRating;
