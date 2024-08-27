import React from "react";
import FeedBackForm from "./forms/FeedBackForm";
import { Route, Routes } from "react-router-dom";

const Feedback = () => {

  return (
    <Routes>
      <Route 
        path="edit_forms/" 
        element={
          <FeedBackForm 
          />
        } 
      /> 
    </Routes>
  );
};

export default Feedback;

