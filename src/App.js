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

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/home/:homeId/single-product"
          element={<SingleProduct />}
        />

        <Route path="/announcements" element={<Announcements />} />

        <Route path="/shops" element={<Shops />} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/help" element={<Help />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
