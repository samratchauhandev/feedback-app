import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import Edit_And_DeleteComponent from "../../components/Edit_And_DeleteComponent";

function RadioButton() {
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ my: 2, p: 1, boxShadow: "0px 2px 4px 0px #00000040" }}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Multiple choice - 1 answer</FormLabel>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          
        >
          <FormControlLabel value="Radio 1" control={<Radio />} label="Radio 1" />
          <FormControlLabel value="Radio 2" control={<Radio />} label="Radio 2" />
          <FormControlLabel value="Radio 3" control={<Radio />} label="Radio 3" />
        </RadioGroup>
      </FormControl>
      <Edit_And_DeleteComponent />
    </Box>
  );
}

export default RadioButton;
