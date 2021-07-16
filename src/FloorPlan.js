import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

export default function FloorPlan() {
  const numBedroom = ["Bedroom1", "Bedroom2", "Bedroom3"];
  const bathSize = ["Half Bath", "Full Bath"];

  return (
    <>
      <Kitchen />
      <LivingRoom />
      <Bedroom num={{ numBedroom }} />
      <Bath size={{ bathSize }} />
    </>
  );
}
