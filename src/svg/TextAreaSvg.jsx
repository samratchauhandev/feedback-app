import { SvgIcon } from "@mui/material";
import React from "react";

function TextAreaSvg({sx}) {
  return (
    <SvgIcon sx={{ width: "23px", height: "24px", ...sx }}>
      <svg viewBox="0 0 23 24" fill="none">
        <path
          d="M20.25 5.00912V18.7286H2.25V5.00912H20.25ZM20.25 3.88916H2.25C1.63125 3.88916 1.125 4.39314 1.125 5.00912V18.7286C1.125 19.3445 1.63125 19.8485 2.25 19.8485H20.25C20.8687 19.8485 21.375 19.3445 21.375 18.7286V5.00912C21.375 4.39314 20.8687 3.88916 20.25 3.88916ZM3.375 6.12907V7.19303H5.175V11.4489H6.24375V7.19303H8.04375V6.12907H3.375ZM10.125 7.865H6.91875V8.92896H7.9875V11.3929H9.05625V8.92896H10.125V7.865Z"
          fill="black"
        />
      </svg>
    </SvgIcon>
  );
}

export default TextAreaSvg;
