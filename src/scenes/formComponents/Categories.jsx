import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";
import Edit_And_DeleteComponent from "../../components/Edit_And_DeleteComponent";

function Categories() {
  return (
    <Box sx={{ my: 2, p: 1, boxShadow: "0px 2px 4px 0px #00000040" }}>
      <Typography sx={{ fontSize: "14px", my: 2 }}>
        Pick a subject and provide your feedback:
      </Typography>
      <Button sx={{width:'115px',border: '1px solid #00000052',mx:'10px',color:'#504F4F'}}>
        Bug
      </Button>
      <Button sx={{width:'115px',border: '1px solid #00000052',mx:'10px',color:'#504F4F'}}>
        Content
      </Button>
      <Button sx={{width:'115px',border: '1px solid #00000052',mx:'10px',color:'#504F4F'}}>
        Other
      </Button>
      <Edit_And_DeleteComponent />
    </Box>
  );
}

export default Categories;




