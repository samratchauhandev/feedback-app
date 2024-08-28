import React, { createContext, useState } from "react";

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [fields, setFields] = useState([]);
  const [form, setForm] = useState({});
  const [editState, setEditState] = useState({
    state: true,
    index: "",
  });
  return (
    <FeedbackContext.Provider value={{ fields, setFields ,editState, setEditState, form, setForm}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
