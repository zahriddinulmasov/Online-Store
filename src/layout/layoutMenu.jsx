import { Box, CssBaseline, Fab, Toolbar } from "@mui/material";
import { Header } from "../container/header/header";
import { ScrollTop } from "../components/scrolls/keyboardScroll";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Outlet } from "react-router-dom";
import { Footer } from "../container/footer/footer";

export const LayoutMenu = (props) => {
  return (
    <Box>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor">
        <Header />
      </Toolbar>

      <Box>
        <ScrollTop {...props}>
          <Fab
            sx={{
              ":hover": {
                backgroundColor: "#A4A4A3",
                color: "#F5F5F5",
              },
              ":active": {
                backgroundColor: "#A4A4A3",
                color: "#ffffff",
              },
              backgroundColor: "#ffffff",
              color: "#5a5a5a",
              width: "50px",
              height: "50px",
            }}
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon sx={{ fontSize: "1.8rem" }} />
          </Fab>
        </ScrollTop>

        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};
