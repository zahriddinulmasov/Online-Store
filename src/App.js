import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Header } from "./container/header/header";
import { Announcements } from "./pages/announcements";
import { Shops } from "./pages/shops";
import { ForBusiness } from "./pages/forBusiness";
import { Help } from "./pages/help";
import { Home } from "./pages/home";
import { Error } from "./pages/error";
import { Footer } from "./container/footer/footer";
import { SingleProduct } from "./pages/singleProduct";
import { Login } from "./pages/login/login";
import { Registration } from "./pages/registration/registration";
import { ToAnnounce } from "./pages/toAnnounce/toAnnounce";
import { ProfilePage } from "./pages/profilePage/profilePage";

// const token = window.localStorage.getItem("token");

function App() {
  // const [token, setToken] = useState(false);
  return (
    <div className="App">
      <Header />

      <Routes>
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
      </Routes>

      {/* <Routes>
        </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
