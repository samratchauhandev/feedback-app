import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/image.png";
import useFeedback from "../../feedback/hooks/useFeedback";
import { useLocation } from "react-router-dom";

function Header() {
  const { form, setTotalForms, totalForms } = useFeedback();
  const location = useLocation();

  const handlePublish = () => {
    localStorage.setItem("forms", JSON.stringify(form));
  };

  const handleSave = () => {
    setTotalForms((prev) => [...prev, form]);
    console.log(totalForms);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "64px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px 0px #00000040",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logoImage" />
        <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
          USER FEEDBACK
        </Typography>
      </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mx: "19px" }}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mx: "14px" }}
            onClick={handlePublish}
          >
            Publish
          </Button>
        </Box>
    </Box>
  );
}

export default Header;
