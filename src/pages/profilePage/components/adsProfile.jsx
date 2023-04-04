import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { AdsProfileRow } from "./adsProfileRow";

const sellProfile = {
  p: { xs: "8px", sm: "12px", md: "16px" },
  fontWeight: 600,
  fontSize: { xs: "12px", sm: "13px", md: "14px" },
  lineHeight: { xs: "15px", sm: "16px", md: "17px" },
};

export const AdsProfile = () => {
  return (
    <Box sx={{ p: "12px 0" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: {xs: 550, sm: 780} }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{background: "rgba(0, 0, 0, 0.0470165)"}}>
              <TableCell sx={sellProfile}>Фото</TableCell>
              <TableCell align="inherit" sx={sellProfile}>Название</TableCell>
              <TableCell align="right" sx={sellProfile}>Цена</TableCell>
              <TableCell align="right" sx={sellProfile}>Дата</TableCell>
              <TableCell align="center" sx={sellProfile}>Действие</TableCell>
            </TableRow>
          </TableHead>

          <AdsProfileRow />
          <AdsProfileRow />
          <AdsProfileRow />
          <AdsProfileRow />
        </Table>
      </TableContainer>
    </Box>
  );
};
