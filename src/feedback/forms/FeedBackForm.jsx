import { Box, Typography } from "@mui/material";
import React from "react";
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

function FeedBackForm() {
  const { fields, setFields, editState, setEditState } = useFeedback();

  const deleteHandler = (index) => {
    setFields((prevFields) => prevFields.filter((_, idx) => idx !== index));
  };

  const editHandler = (index) => {
    setEditState(() => ({
      state: false,
      index: index,
    }));
  };

  return (
    <>
      <Box
        sx={{
          width: "500px",
          backgroundColor: "#FFFFFF",
          m: "47px auto 0 auto",
          boxShadow: "0px 4px 4px 0px #00000040",
          borderRadius: "15px",
          minHeight: "752px",
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
            Generic Website Rating
          </Typography>
          <EditSvg />
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
          {fields.length !== 0 ? (
            fields.map((item, index) => (
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
    </>
  );
}

export default FeedBackForm;
