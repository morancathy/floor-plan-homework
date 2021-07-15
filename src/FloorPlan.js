import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

export default function FloorPlan() {
  const numBedroom = ["Master Bedroom", "Guest Bedroom", "Pet Bedroom"];
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
