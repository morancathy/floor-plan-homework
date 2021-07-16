import React from "react";

export default function Bedroom(props) {
  return (
    <>
      {props.num.numBedroom.map((thing) => {
        return (
          <div id="bedroom">
            <h1>{thing}</h1>
          </div>
        );
      })}
    </>
  );
}
