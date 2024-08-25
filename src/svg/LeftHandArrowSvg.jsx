import SvgIcon from "@mui/material/SvgIcon";

function LeftHandArrowSvg({ sx }) {
  return (
    <SvgIcon sx={{ width: "13px", height: "20px", ...sx }}>
      <svg
        viewBox="0 0 13 20"
        fill="none"
      >
        <path
          d="M12.6834 2.35L10.3334 0L0.333374 10L10.3334 20L12.6834 17.65L5.05004 10L12.6834 2.35Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  );
}

export default LeftHandArrowSvg;
