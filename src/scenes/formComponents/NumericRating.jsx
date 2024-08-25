import { Box, Typography } from '@mui/material'
import React from 'react'
import Edit_And_DeleteComponent from '../../components/Edit_And_DeleteComponent'


const rating =['1','2','3','4','5','6','7','8','9','10']

function NumericRating() {
  return (
    <Box sx={{boxShadow: '0px 2px 4px 0px #00000040', my:2, p:1 }}>
      <Typography sx={{fontSize:'14px', my:2}}>
      How likely is it that you will recommend us to your family and friends?
      </Typography>
      <Box sx={{display:'flex', justifyContent:'space-around',border:'1px solid #DBD6D6'}}>
      {
        rating.map((item,idx)=>(
          <Box key={idx} sx={{display:'flex', justifyContent:'center',height:'35px',alignItems:'center', width:'100%',border:'1px solid #DBD6D6'}}>
            {item}
          </Box>
        ))
      }
      </Box>
      <Edit_And_DeleteComponent/>
    </Box>
  )
}

export default NumericRating