import React, { useRef } from "react";

import HeroCareers from "./Hero";
import FoundersNote from "./FoundersNote";
import ExploreSection from "./ExploreSection";
import Disclaimer from "./Disclaimer";
import PrivilegeCards from "./Cards";
function Careers() {
  const exploreRef = useRef(null);
  return (
    <div>
      <HeroCareers reference={exploreRef} />
      <FoundersNote />
      <Disclaimer reference={exploreRef} />
      <PrivilegeCards />
      <ExploreSection  />
    </div>
  );
}

export default Careers;
