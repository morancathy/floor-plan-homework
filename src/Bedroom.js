import React from "react";

export default function Bedroom(props) {
  return (
    <>
      {props.num.numBedroom.map((thing) => {
        return (
          <div>
            <h1>{thing}</h1>
          </div>
        );
      })}
    </>
  );
}
