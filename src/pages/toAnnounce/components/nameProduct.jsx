import { Typography } from "@mui/material";

export const NameProduct = ({ title }) => {
  return (
    <>
      <Typography variant="h5"
        sx={{
          m: "0 12px",
          px: "8px",
          fontFamily: "IBM Plex Sans Arabic",
          fontWeight: 600,
          fontSize: {xs: "18px", sm: "19px"},
          lineHeight: "21px",
          color: "#000000",
          textAlign: "center"
        }}
      >
        {title}
      </Typography>
    </>
  );
};
