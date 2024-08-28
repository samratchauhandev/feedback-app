import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextArea from "./components/TextArea";
import NumericRating from "./components/NumericRating";
import SmileyRating from "./components/SmileyRating";
import SingleLineInput from "./components/SingleLineInput";
import RadioButton from "./components/RadioButton";
import StarRating from "./components/StarRating";
import Categories from "./components/Categories";
import CancelSvg from "../svg/CancelSvg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  outline: "none",
  maxHeight: "753px",
  width: "500px",
  display: "flex",
  flexDirection: "column",
};

function UserFeedbackModel() {
  const [form, setForms] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedForm = localStorage.getItem("forms");
    if (savedForm) {
      setForms(JSON.parse(savedForm));
    }

    // const today = new Date().toISOString().split('T')[0]; // format YYYY-MM-DD
    // const currentTime = new Date().toISOString().split('T')[1].split('.')[0]; // format HH:MM:SS

    const servicesUrl = "http://localhost:3000/services";
    const aboutUrl = "http://localhost:3000/about";

    const shouldOpenModal =
      (location.pathname === "/about" || location.pathname === "/services") 
    //   &&
    // //   localStorage.getItem('date') === today &&
    // //   localStorage.getItem('time') === currentTime;

    if (shouldOpenModal ) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Clean up timeout if the component unmounts
    }
  }, [location.pathname]);

  const handleClose = () => setOpen(false);
  const handleSubmit = async () => {
    handleClose()
    navigate("/forms");
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#5578F4",
            color: "#FFFFFF",
            height: "100px",
            borderRadius: "15px 15px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            pl: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              px: 2,
            }}
          >
            {form?.name}
          </Typography>
          <CancelSvg sx={{ cursor: 'pointer' }} onClick={handleClose} />
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            padding: "22px 12px",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#a39898",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          {form?.elements?.length !== 0 &&
            form?.elements?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  py: 2,
                  boxShadow: "0px 2px 4px 0px #00000040",
                  my: 3,
                }}
              >
                {item.type === "textbox" && <TextArea {...item} />}
                {item.type === "numberic_rating" && (
                  <NumericRating {...item} />
                )}
                {item.type === "star_rating" && <StarRating {...item} />}
                {item.type === "smile_rating" && <SmileyRating {...item} />}
                {item.type === "single_input" && (
                  <SingleLineInput {...item} />
                )}
                {item.type === "radio_btn" && <RadioButton {...item} />}
                {item.type === "categories" && <Categories {...item} />}
              </Box>
            ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px",
            borderTop: "1px solid #E0E0E0",
            backgroundColor: "#f9f9f9",
            borderRadius: "0 0 15px 15px",
          }}
        >
          <Button variant="contained" color="primary" size="large"  onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default UserFeedbackModel;


