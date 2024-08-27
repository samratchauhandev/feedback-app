// import { Box, Typography } from "@mui/material";
// import React from "react";

// const rating = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// function NumericRating({label}) {
//   return (
//     <Box>
//       <Typography sx={{ fontSize: "14px", my: 2 }}>
//        {label}
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-around",
//           border: "1px solid #DBD6D6",
//         }}
//       >
//         {rating.map((item, idx) => (
//           <Box
//             key={idx}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               height: "35px",
//               alignItems: "center",
//               width: "100%",
//               border: "1px solid #DBD6D6",
//               cursor: "pointer" 
//             }}
//           >
//             {item}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// export default NumericRating;


import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const rating = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function NumericRating({ label }) {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (item) => {
    setSelectedRating(item);
  };

  return (
    <Box>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
        {label}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid #DBD6D6",
          borderRadius: "4px",
          overflow: "hidden", // Ensure no overflow issues with borders
        }}
      >
        {rating.map((item, idx) => (
          <Box
            key={idx}
            onClick={() => handleRatingClick(item)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "35px",
              width: "100%",
              borderRight: idx !== rating.length - 1 ? "1px solid #DBD6D6" : "none", // Remove last border
              cursor: "pointer",
              backgroundColor: item === selectedRating ? "#5578F4" : "#FFFFFF",
              color: item === selectedRating ? "#FFFFFF" : "#000000",
              transition: "background-color 0.3s, color 0.3s",
              '&:hover': {
                backgroundColor: item === selectedRating ? "#4169E1" : "#F0F0F0",
              },
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default NumericRating;
