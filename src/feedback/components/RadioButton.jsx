import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

function RadioButton({label, options}) {
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
          {
            options.map(({subLabel},idx)=>
            <FormControlLabel
              value={subLabel}
              control={<Radio />}
              label={subLabel}
            />
             )
          }
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default RadioButton;
