import {
  Box,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TextAreaSvg from "../../svg/TextAreaSvg";
import NumericRatingSvg from "../../svg/NumericRatingSvg";
import StarRatingSvg from "../../svg/StarRatingSvg";
import SmileyRatingSvg from "../../svg/SmileyRatingSvg";
import SingleLineInputSvg from "../../svg/SingleLineInputSvg";
import RadioButtonSvg from "../../svg/RadioButtonSvg";
import CategoriesSvg from "../../svg/CategoriesSvg";
import PlusSvg from "../../svg/PlusSvg";
import FieldEdit from "./FieldEdit";
import useFeedback from "../hooks/useFeedback";
// import FieldEdit from "./FieldEdit";

const addFields = [
  { label: "Textarea", type: "textbox" },
  { label: "Numeric rating", type: "numberic_rating" },
  { label: "Star rating", type: "star_rating" },
  { label: "Smiley rating", type: "smile_rating" },
  { label: "Single line input", type: "single_input" },
  { label: "Radio button", type: "radio_btn" },
  { label: "Categories", type: "categories" },
];

const svgs = [
  TextAreaSvg,
  NumericRatingSvg,
  StarRatingSvg,
  SmileyRatingSvg,
  SingleLineInputSvg,
  RadioButtonSvg,
  CategoriesSvg,
];

const formStructure = {
  fields: [
    {
      label: "Would you like to add a comment?",
      type: "textbox",
      ans: "",
      error: "",
      is_required: false,
    },
    {
      label:
        "How likely is it that you will recommend us to your family and friends?",
      type: "numberic_rating",
      ans: 10,
      error: "",
      is_required: false,
    },
    {
      label: "Give a star rating for the website.",
      type: "star_rating",
      ans: 5,
      error: "",
      is_required: false,
    },
    {
      label: "What is your opinion of this page?",
      type: "smile_rating",
      ans: 5,
      error: "",
      is_required: false,
    },
    {
      label: "Do you have any suggestions to improve our website?",
      type: "single_input",
      ans: "",
      error: "",
      is_required: false,
    },
    {
      label: "Multiple choice - 1 answer",
      type: "radio_btn",
      ans: [],
      error: "",
      is_required: false,
      options: [
        { subLabel: "Radio 1" },
        { subLabel: "Radio 2" },
        { subLabel: "Radio 3" },
      ],
    },
    {
      label: "Pick a subject and provide your feedback:",
      type: "categories",
      ans: "",
      error: "",
      is_required: false,
      options: [
        { subLabel: "BUG" },
        { subLabel: "CONTENT" },
        { subLabel: "OTHER" },
      ],
    },
  ],
};

function SideBar() {
  const {  editState, setForm } = useFeedback();

  const handleEditState = (selectType) => {
    const selectedField = formStructure.fields.find(
      (item) => item.type === selectType
    );
    // setFields((prev) => [...prev, selectedField]);
    setForm((prev) => ({...prev, elements: [...prev.elements ,selectedField]}))
    console.log(selectedField, editState);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        width: "317px",
        height: "100%",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px 0px #00000040",
        pl: "34px",
        pt: 3,
        pr: 3,
      }}
    >
      {editState.state ? (
        <Box>
          <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: "600", mb: 2 }}>
              Add fields
            </Typography>
            <Box paddingTop="16px">
              {addFields.map((item, idx) => {
                const SvgComponent = svgs[idx];
                return (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 3,
                    }}
                  >
                    <Box display="flex">
                      <SvgComponent />
                      <Typography sx={{ ml: 2 }}>{item.label}</Typography>
                    </Box>
                    <PlusSvg
                      sx={{ width: "21px", height: "22px", cursor: "pointer" }}
                      onClick={() => handleEditState(item.type)}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ mt: 6 }}>
            <Typography fontSize="20px" fontWeight="600">
              Add logic
            </Typography>
            <Box>
              <Box>
                <Typography
                  fontSize="14px"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  Show based on URL conditions <Switch defaultChecked />
                </Typography>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  placeholder="http://"
                />
              </Box>
              <Box>
                <Typography
                  fontSize="14px"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  Show on a specific date <Switch defaultChecked />
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Start date"
                  variant="outlined"
                  placeholder="MM/DD/YYYY"
                />
              </Box>
              <Box>
                <Typography
                  fontSize="14px"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  Show on a specific time <Switch defaultChecked />
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Select Time"
                  variant="outlined"
                  placeholder="hh:mm aa"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <FieldEdit />
      )}
    </Box>
  );
}

export default SideBar;
