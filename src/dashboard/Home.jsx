import React from "react";
import FeedbackProvider from "../feedback/context/FeedbackProvider";
import Header from "../components/header";
import { Route, Routes } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import Feedback from "../feedback";

function Home() {
  return (
    <>
      <Header />
      <FeedbackProvider>
        <Routes>
          <Route
            path="forms/"
            element={
                <DashboardCard />
            }
          />
          <Route path="forms/*" element={<Feedback />} />
        </Routes>
      </FeedbackProvider>
    </>
  );
}

export default Home;
