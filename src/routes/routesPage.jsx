import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { SingleProduct } from "../pages/singleProduct";
import { ToAnnounce } from "../pages/toAnnounce/toAnnounce";
import { Announcements } from "../pages/announcements";
import { Shops } from "../pages/shops";
import { ForBusiness } from "../pages/forBusiness";
import { ProfilePage } from "../pages/profilePage/profilePage";
import { Registration } from "../pages/registration/registration";
import { Error } from "../pages/error";
import { Login } from "../pages/login/login";
import { Help } from "../pages/help";
import { Home } from "../pages/home";
import { LayoutMenu } from "../layout/layoutMenu";

export const RoutesPage = () => {
  return (
    <Box>
      <Routes>
        <Route element={<LayoutMenu />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/home/:homeId/single-product"
            element={<SingleProduct />}
          />
          <Route path="/to-announce" element={<ToAnnounce />} />

          <Route path="/announcements" element={<Announcements />} />

          <Route path="/shops" element={<Shops />} />
          <Route path="/for-business" element={<ForBusiness />} />
          <Route path="/help" element={<Help />} />
          <Route path="/user-profile" element={<ProfilePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Box>
  );
};
