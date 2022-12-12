import React from "react";
import "./MakePlanetSelectHeader.scss";

export default function MakePlanetSelectHeader({ value }) {
  return (
    <div>
      <div className="makePlanetSelectHeaderText">{value}</div>
    </div>
  );
}
