import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function StarRatingSvg({ sx }) {
  return (
    <SvgIcon sx={{ width: "23px", height: "23px", ...sx }}>
      <svg viewBox="0 0 23 23" fill="none">
        <path
          d="M20.625 8.79857L13.8844 8.21992L11.25 2.0415L8.61562 8.22926L1.875 8.79857L6.99375 13.2131L5.45625 19.7741L11.25 16.2929L17.0438 19.7741L15.5156 13.2131L20.625 8.79857ZM11.25 14.5477L7.725 16.6663L8.6625 12.6717L5.55 9.98385L9.65625 9.6292L11.25 5.86802L12.8531 9.63853L16.9594 9.99319L13.8469 12.6811L14.7844 16.6756L11.25 14.5477Z"
          fill="black"
        />
      </svg>
    </SvgIcon>
  );
}

export default StarRatingSvg;
