import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Culture from "./pages/Culture";
import Careers from "./pages/Careers";

import Marketplace from "./pages/Marketplace";
import MetalcloudApplication from "./pages/MetalcloudApplication";
function App() {
  return (
    <div className="home-template">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/application" element={<MetalcloudApplication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
