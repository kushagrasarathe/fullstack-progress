import React from "react";
import image1 from "../assets/image1.png";
import star from "../assets/star.png";

export default function Card() {
  return (
    <div className="card flex">
        <img className="cardImg" src={image1} alt="" />

      <div className="cardContent">
        <div className="flexRow">
          <img className="star flexRow" src={star} alt="" />
          <span className="">5.0</span>
          <span className="gray">&nbsp;(6) •</span>
          <span className="gray">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
