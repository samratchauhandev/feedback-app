import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PlusSvg from "../svg/PlusSvg";
import { useNavigate } from "react-router-dom";
import useFeedback from "../feedback/hooks/useFeedback";

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

function DashboardCard() {
  const { form, setForm } = useFeedback();
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreate = async() => {
    await setForm({ name: formName, elements: [] });
    navigate("/forms/edit_forms")
  };

console.log(JSON.stringify(form))
  return (
    <Box
      sx={{
        display: "flex",
        gap: "34px",
        flexWrap: "wrap",
        m: "55px 0 0 44px",
      }}
    >
      <Box
        sx={{
          width: "306px",
          height: "379px",
          boxShadow: "0px 4px 4px 0px #00000040",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            mt: "140px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={handleOpen}
        >
          {/* <Link to="/forms/edit_forms">
        </Link> */}
          <PlusSvg sx={{ cursor: "pointer" }} />
          <Typography sx={{ fontSize: 32, fontWeight: 500, mt: "26px" }}>
            New form
          </Typography>
        </Box>
        {

        }
      </Box>
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
              onClick={handleCreate}
            >
              CREATE
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

export default DashboardCard;
