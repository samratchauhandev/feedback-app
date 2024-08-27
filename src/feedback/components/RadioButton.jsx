import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function RadioButton({label}) {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ my: 1 }}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          {label}
        </FormLabel>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Radio 1"
            control={<Radio />}
            label="Radio 1"
          />
          <FormControlLabel
            value="Radio 2"
            control={<Radio />}
            label="Radio 2"
          />
          <FormControlLabel
            value="Radio 3"
            control={<Radio />}
            label="Radio 3"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default RadioButton;
