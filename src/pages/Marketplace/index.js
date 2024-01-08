import React from "react";
import Hero from "./Hero";
import TrustedProvenSolutions from "./TrustedProvenSol";
import TransformingIdeas from "./TransformingIdeas";
import OneStopSolutions from "./OneStopSolutions";
import CustomerCards from "../../Components/General/Cards/CustomerCards";
import Certificate from "./Certificate";

function Marketplace() {
  return (
    <>
      <Hero />
      <TrustedProvenSolutions />
      <TransformingIdeas />
      <OneStopSolutions />
      <CustomerCards />
      <Certificate/>
    </>
  );
}

export default Marketplace;
