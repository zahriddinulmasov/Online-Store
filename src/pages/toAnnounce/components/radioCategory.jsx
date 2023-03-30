import {  FormControlLabel, Radio, Typography } from "@mui/material";

export const RadioCategory = (props) => {
  const { changed, id, isSelected, label, value } = props;

  return (
    <>
      <FormControlLabel
      id={id}
      onChange={changed}
      value={value}
      checked={isSelected}
        control={<Radio />}
        label={
          <Typography
            sx={{
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "17px",
              color: "#000000",
            }}
          >
            {label}
          </Typography>
        }
      />
    </>
  );
};
