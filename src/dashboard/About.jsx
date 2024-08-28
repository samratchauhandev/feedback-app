import React from 'react';
import backgroundImage from "../assets/background.jpg";
import { Typography } from '@mui/material';

function About() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',       
    backgroundPosition: 'center',  
    height: '100vh',               
    width: '100%',                 
    position: 'relative',          
  };

  return (
    <div style={backgroundStyle}>
     <Typography sx={{fontSize:'30px', display:"flex", justifyContent:'center', color:'#FFFFFF'}}>
        ABOUT US
      </Typography>
    </div>
  );
}

export default About;
