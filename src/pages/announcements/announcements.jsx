import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { MainAnnouncements } from "./container/mainAnnouncements/mainAnnouncements";
import { TopAnnouncements } from "./container/topAnnouncements";

export const Announcements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ mt: { xs: "10px", sm: "14px", md: "29px" } }}>
      <TopAnnouncements />
      <MainAnnouncements data={data} />
    </Box>
  );
};
