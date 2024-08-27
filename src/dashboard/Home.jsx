// import { Box } from "@mui/material";
// import React from "react";
// import Header from "../components/header";
// import DashboardCard from "../components/DashboardCard";
// import Feedback from "../feedback";
// import FeedbackProvider from "../feedback/context/FeedbackProvider";

// function Home() {
//   return (
//     <Box>
//       <Header />
//       <FeedbackProvider>
//         <Feedback />
//       </FeedbackProvider>
//     </Box>
//   );
// }

// export default Home;

import { Box } from "@mui/material";
import React, { useState } from "react";
import FeedbackProvider from "../feedback/context/FeedbackProvider";
import Header from "../components/header";
import { Route, Routes } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import Feedback from "../feedback";

function Home() {

  return (
    <Box>
      <Header />
      <FeedbackProvider>
        <Routes>
          <Route
            path="forms/"
            element={
              <Box
                sx={{
                  display: "flex",
                  gap: "34px",
                  flexWrap: "wrap",
                  m: "55px 0 0 44px",
                }}
              >
                <DashboardCard />
              </Box>
            }
          />
          <Route
            path="forms/*"
            element={
              <Feedback  />
            }
          />
        </Routes>
      </FeedbackProvider>
    </Box>
  );
}

export default Home;
