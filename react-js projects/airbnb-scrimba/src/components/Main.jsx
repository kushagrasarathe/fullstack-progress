import React from "react";
import photoGrid from "../assets/photo-grid.png";

export default function () {
  return (
    <div className="main">
      <img className="grid-img" src={photoGrid} alt="" />
      <div className="flex">
        <h1 className="heading">Online Experiences</h1>
        <p className="intro">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
