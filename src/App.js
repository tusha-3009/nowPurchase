import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/assets/css/style-responsive.css";
import "rsuite/dist/rsuite.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Components/Home";
import Culture from "./pages/Culture";
import Careers from "./pages/Careers";
import Marketplace from "./pages/Marketplace";
import MetalcloudApplication from "./pages/MetalcloudApplication";
import GetInTouch from "./pages/GetInTouch";
import EventsPage from "./Components/Footer/Events";
import AddressSection from "./Components/Footer/Address";
import PrivacySection from "./Components/Footer/PrivacyPolicy";
import TermsConditions from "./Components/Footer/Terms&Conditions";
import CompanyAnnualReport from "./Components/Footer/CompanyAnnualReport";
import Csr from "./Components/Footer/SocialCorporateRes";
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
          <Route path="/getInTouchForm" element={<GetInTouch />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/our-address" element={<AddressSection />} />
          <Route path="/privacy" element={<PrivacySection />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route
            path="/companyAnnualReport"
            element={<CompanyAnnualReport />}
          />
          <Route path="/csr" element={<Csr />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
