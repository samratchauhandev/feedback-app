import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LeftHandArrowSvg from "../../svg/LeftHandArrowSvg";
import useFeedback from "../hooks/useFeedback";

function FieldEdit() {
  const { editState, setEditState, form, setForm } =
    useFeedback();

  // Find the field based on the index
  const textLabel = form.elements.find((_, idx) => idx === editState.index);

  const callBackHandler = () => {
    setEditState((prev) => ({ ...prev, state: true }));
  };

  const handleInputChange = (event, key) => {
    const updatedFields = form.elements.map((field, idx) =>
      idx === editState.index ? { ...field, [key]: event.target.value } : field
    );
    // setFields(updatedFields);
    setForm((prev) => ({ ...prev, elements: updatedFields }));
  };
  console.log(form);
  const handleOptionChange = (event, subIndex) => {
    const updatedFields = form.elements.map((field, idx) => {
      if (idx === editState.index) {
        const updatedOptions = field.options.map((option, optIdx) =>
          optIdx === subIndex
            ? { ...option, subLabel: event.target.value }
            : option
        );
        return { ...field, options: updatedOptions };
      }
      return field;
    });
    // setFields(updatedFields);
    setForm((prev) => ({ ...prev, elements: updatedFields }));
  };

  const handleSwitchChange = (event) => {
    const updatedFields = form.elements.map((field, idx) => {
      if (idx === editState.index) {
        return { ...field, is_required: event.target.checked };
      }
      return field;
    });
    // setFields(updatedFields);
    setForm((prev) => ({ ...prev, elements: updatedFields }));
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LeftHandArrowSvg
          sx={{ color: "black", cursor: "pointer" }}
          onClick={callBackHandler}
        />
        <Typography sx={{ fontSize: "16px", fontWeight: "600", ml: 2 }}>
          Back to Add Fields
        </Typography>
      </Box>

      <TextField
        id="label"
        label="Label"
        value={textLabel?.label || ""}
        variant="standard"
        sx={{ my: 3 }}
        onChange={(e) => handleInputChange(e, "label")}
      />
      <FormControlLabel
        control={
          <Switch
            checked={textLabel.is_required}
            onChange={handleSwitchChange}
          />
        }
        label="Required"
      />
      {textLabel?.type !== "radio_btn" && textLabel?.type !== "categories" ? (
        <TextField
          id="error"
          label="Error message"
          variant="standard"
          value={textLabel?.errorMessage || ""}
          sx={{ my: 3 }}
          onChange={(e) => handleInputChange(e, "error")}
        />
      ) : (
        <Box>
          <Typography>Options</Typography>
          {textLabel?.options.map((option, subIdx) => (
            <TextField
              key={subIdx}
              value={option.subLabel}
              id="subLabel"
              variant="standard"
              sx={{ my: 2 }}
              onChange={(e) => handleOptionChange(e, subIdx)}
            />
          ))}
        </Box>
      )}

      <Box sx={{ my: 2 }}>
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={callBackHandler}
        >
          SAVE
        </Button>

        <Button
          size="large"
          color="inherit"
          variant="contained"
          sx={{ ml: "18px" }}
          onClick={callBackHandler}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default FieldEdit;
