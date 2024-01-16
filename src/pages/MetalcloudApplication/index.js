import React from "react";
import MeltingProcessMadeReliable from "./Hero";
import TransformingMeltingCards from "./TransformingMeltingCards";
import MapSection from "./MapSection";
import PlansPricing from "./PlansPricing";
import CustomerCards from "./CustomerCards";

function MetalcloudApplication() {
  return (
    <>
      <MeltingProcessMadeReliable />
      <TransformingMeltingCards />
      <MapSection/>
      <PlansPricing/>
      <CustomerCards/>
    </>
  );
}

export default MetalcloudApplication;
