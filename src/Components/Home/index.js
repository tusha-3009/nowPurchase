import React, { useEffect } from "react";

import TechnologyDriven from "./TechnologyDriven";
import ProcurementSection from "./ProcurementSection";
import OfferingsSection from "./OfferingsSection";
import CultureSection from "./CultureSection";
import CustomerCards from "../General/Cards/CustomerCards";
import MediaCards from "./MediaCards";
import InvestorSection from "./InvestorSection";
import AccoladesAssociations from "./AccoladesAssociations";

function Home() {
  
  return (
    <>
      <TechnologyDriven />
      <ProcurementSection />
      <OfferingsSection />
      <CultureSection />
      <CustomerCards />
      <MediaCards />
      <AccoladesAssociations/>
      <InvestorSection />
    </>
  );
}

export default Home;
