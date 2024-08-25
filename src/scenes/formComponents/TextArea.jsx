import { Box, Typography } from '@mui/material'
import React from 'react'
import Edit_And_DeleteComponent from '../../components/Edit_And_DeleteComponent'

function TextArea() {
  return (
    <Box sx={{ boxShadow: '0px 2px 4px 0px #00000040', width:'auto', p:1}}>
      <Typography sx={{fontSize:14, fontWeight:400, display:'flex',alignItems:'center', my:2}}>
        Would you like to add a comment?
      </Typography>
      <input style={{border: '1px solid #DBD6D6', width:'100%',height:'106px'}}/>
      <Edit_And_DeleteComponent/>
    </Box>
  )
}

export default TextArea