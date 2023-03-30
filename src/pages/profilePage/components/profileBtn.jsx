import { Box, Button, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const ProfileBtn = () => {
  return (
    <>
      <Button
        sx={{
          p: 0,
          maxWidth: "154.5px",
          width: "100%",
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          // backgroundColor: "#41D481",
          borderRadius: "23px 5px 5px 23px",
          border: "1px solid #41D481",
          textTransform: "inherit",
          color: "#0A090B",
        }}
      >
        <AddIcon
          sx={{
            p: "10px",
            ml: { xs: "9px", md: "15px" },
            borderRadius: "50%",
            background: "#41D481",
          }}
        />

        <Typography
          sx={{
            ml: "-44px",
            p: " 0 33px 0 53px",
            fontWeight: 500,
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: { xs: "17px", sm: "18px", md: "19px" },
          }}
        >
          Пополнить
        </Typography>
      </Button>

      <Tooltip title="Пополнить" arrow>
        <Box
          sx={{
            p: 0,
            // border: "1px solid red",
            display: { xs: "flex", sm: "none" },
            borderRadius: "23px",
          }}
        >
          <AddIcon
            sx={{
              p: "6px",
              borderRadius: "50%",
              background: "#41D481",
            }}
          />
        </Box>
      </Tooltip>
    </>
  );
};
