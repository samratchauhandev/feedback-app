import SvgIcon from "@mui/material/SvgIcon";

function EditSvg({ sx ,onClick}) {
  return (
    <SvgIcon sx={{ width: "18px", height: "18px", ...sx }} onClick={onClick}>
      <svg
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M0 14.25V18H3.75L14.81 6.94004L11.06 3.19004L0 14.25ZM17.71 4.04004C18.1 3.65004 18.1 3.02004 17.71 2.63004L15.37 0.290044C15.2775 0.197329 15.1676 0.12377 15.0466 0.0735815C14.9257 0.0233925 14.796 -0.00244141 14.665 -0.00244141C14.534 -0.00244141 14.4043 0.0233925 14.2834 0.0735815C14.1624 0.12377 14.0525 0.197329 13.96 0.290044L12.13 2.12004L15.88 5.87004L17.71 4.04004Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
}

export default EditSvg;
