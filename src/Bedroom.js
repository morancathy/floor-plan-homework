import React from "react";

export default function Bedroom(props) {
  return (
    <>
      {props.num.numBedroom.map((thing) => {
        return (
          <div className="bedroom" id={`${thing}`}>
            <h1>{thing}</h1>
          </div>
        );
      })}
    </>
  );
}
