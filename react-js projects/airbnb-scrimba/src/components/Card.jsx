import React from "react";
import star from "../assets/star.png";

export default function Card(props) {
  return (
    <div className="card">
     <img className="cardImg" src={props.img} alt="" />

      <div className="cardContent">
        <div className="flexRow">
          <img className="star flexRow" src={star} alt="" />
          <span className="">{props.rating}</span>
          <span className="gray">&nbsp;{props.reviewwCount} •</span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
