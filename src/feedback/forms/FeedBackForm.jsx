import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TextArea from "../components/TextArea";
import NumericRating from "../components/NumericRating";
import StarRating from "../components/StarRating";
import SmileyRating from "../components/SmileyRating";
import SingleLineInput from "../components/SingleLineInput";
import RadioButton from "../components/RadioButton";
import Categories from "../components/Categories";
import LeftHandArrowSvg from "../../svg/LeftHandArrowSvg";
import EditSvg from "../../svg/EditSvg";
import DeleteSvg from "../../svg/DeleteSvg";
import SideBar from "../sideBar";
import useFeedback from "../hooks/useFeedback";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 444,
  bgcolor: "background.paper",
  boxShadow: 24,
  py: 2,
  px: 3,
  borderRadius: 2,
  outline: "none",
};

function FeedBackForm() {
  const { setEditState, form, setForm } = useFeedback();
  const [open, setOpen] = useState(false);
  const [formName, setFormName] = useState(form.name);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNameChange = async () => {
    await setForm((prev) => ({ ...prev, name: formName }));
    setOpen(false);
  };

  const deleteHandler = (index) => {
    // setFields((prevFields) => prevFields.filter((_, idx) => idx !== index));
    setForm((prev) => ({
      ...prev,
      elements: prev.elements.filter((_, idx) => idx !== index),
    }));
  };

  const editHandler = (index) => {
    setEditState(() => ({
      state: false,
      index: index,
    }));
  };

  return (
    <Box
      sx={{ width: "100%", position: "relative", flex: "1 1 0%", px: 2, pb: 2 }}
    >
      <Box
        sx={{
          width: "500px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 4px 0px #00000040",
          m: "47px auto 0 auto",
          borderRadius: "15px",
          minHeight: "752px",
          // overflow:"auto",
          // "&::-webkit-scrollbar": {
          //   width: "8px",
          //   height:'50px'
          // },
          // "&::-webkit-scrollbar-track": {
          //   backgroundColor: "#f1f1f1"
          // },
          // "&::-webkit-scrollbar-thumb": {
          //   backgroundColor: "#a39898",
          //   borderRadius: "10px",
          // },
          // "&::-webkit-scrollbar-thumb:hover": {
          //   backgroundColor: "#555",
          // },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#5578F4",
            color: "#FFFFFF",
            height: "74px",
            borderRadius: "15px 15px 0 0",
            display: "flex",
            alignItems: "center",
            pl: 4,
          }}
        >
          <Link to="/forms">
            <LeftHandArrowSvg sx={{ color: "#FFFFFF" }} />
          </Link>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              px: 2,
            }}
          >
            {form.name}
          </Typography>
          <EditSvg onClick={handleOpen} />
        </Box>
        <Box
          sx={{
            p: "22px 12px 100px 15px",
            display: "flex",
            flexDirection: "column",
            width: "auto",
            gap: 3,
          }}
        >
          {form?.elements?.length !== 0 ? (
            form?.elements?.map((item, index) => (
              <Box
                key={index}
                sx={{ px: 1, boxShadow: "0px 2px 4px 0px #00000040" }}
              >
                {item.type === "textbox" && <TextArea {...item} />}
                {item.type === "numberic_rating" && <NumericRating {...item} />}
                {item.type === "star_rating" && <StarRating {...item} />}
                {item.type === "smile_rating" && <SmileyRating {...item} />}
                {item.type === "single_input" && <SingleLineInput {...item} />}
                {item.type === "radio_btn" && <RadioButton {...item} />}
                {item.type === "categories" && <Categories {...item} />}
                <Box sx={{ display: "flex", justifyContent: "end", p: "14px" }}>
                  <EditSvg
                    sx={{ mr: 3, color: "#857a7ac9", cursor: "pointer" }}
                    onClick={() => editHandler(index)}
                  />
                  <DeleteSvg
                    sx={{ color: "#857a7ac9", cursor: "pointer" }}
                    onClick={() => deleteHandler(index)}
                  />
                </Box>
              </Box>
            ))
          ) : (
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: "500px",
                alignItems: "center",
                fontSize: "36px",
                fontWeight: "500",
              }}
            >
              Add Fields
            </Typography>
          )}
        </Box>
      </Box>

      <SideBar />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
            Create Feedback Form
          </Typography>
          <TextField
            id="filled-basic"
            label="Enter form name"
            variant="filled"
            sx={{ width: "100%" }}
            required
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              pt: 1,
              px: 1,
              mt: 3,
            }}
          >
            <Button
              variant="text"
              sx={{ ml: 1, px: 1, py: 0.7, color: "#189657" }}
              onClick={handleNameChange}
            >
              SAVE
            </Button>
            <Button
              variant="text"
              sx={{ ml: 1, px: 1, py: 0.7, color: "#19191957" }}
              onClick={handleClose}
            >
              CANCEL
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default FeedBackForm;
