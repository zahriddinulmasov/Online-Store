import "./App.css";
import { Box } from "@mui/material";

import {ScrollsToTop} from "./components/scrolls/scrollsToTop";
import { RoutesPage } from "./routes/routesPage";

function App() {
  return (
    <Box className="App">
      <ScrollsToTop>
        <RoutesPage />
      </ScrollsToTop>
    </Box>
  );
}

export default App;
