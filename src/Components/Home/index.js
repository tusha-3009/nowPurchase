import React from "react";

import TechnologyDriven from "./TechnologyDriven";
import ProcurementSection from "./ProcurementSection";
import OfferingsSection from "./OfferingsSection";
import CultureSection from "./CultureSection";
import CustomerCards from "../General/Cards/CustomerCards";
import MediaCards from "./MediaCards";
import InvestorSection from "./InvestorSection";

function Home() {
  return (
    <>
      <TechnologyDriven />
      <ProcurementSection />
      <OfferingsSection />
      <CultureSection />
      <CustomerCards />
      <MediaCards />
      <InvestorSection />
    </>
  );
}

export default Home;
