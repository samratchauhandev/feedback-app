import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function PlusSvg({sx,onClick}) {
  return (
    <SvgIcon sx={{width:"91px", height:"91px", ...sx}} onClick={onClick}>
      <svg
        viewBox="0 0 91 91"
        fill="none"
      >
        <rect width="91" height="91" fill="white" />
        <path
          d="M15.1665 45.5H75.8332M45.4998 15.1667V75.8333"
          stroke="#2F4ED7"
          strokeWidth="7.58333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}

export default PlusSvg;
