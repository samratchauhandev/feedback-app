import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function SingleLineInputSvg({ sx }) {
  return (
    <SvgIcon sx={{ width: "23px", height: "24px", ...sx }}>
      <svg
        viewBox="0 0 23 24"
        fill="none"
      >
        <path
          d="M20.25 8.03975V15.8234H2.25V8.03975H20.25ZM20.25 6.9198H2.25C1.63125 6.9198 1.125 7.42378 1.125 8.03975V15.8234C1.125 16.4394 1.63125 16.9434 2.25 16.9434H20.25C20.8687 16.9434 21.375 16.4394 21.375 15.8234V8.03975C21.375 7.42378 20.8687 6.9198 20.25 6.9198ZM3.375 9.27171V10.3357H5.175V14.5915H6.24375V10.3357H8.04375V9.27171H3.375ZM10.125 11.0076H6.91875V12.0716H7.9875V14.5355H9.05625V12.0716H10.125V11.0076Z"
          fill="black"
        />
      </svg>
    </SvgIcon>
  );
}

export default SingleLineInputSvg;
