import React from "react";
import star from "../assets/star.png";

export default function Card(props) {

  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }
  
  return (
    <div className="card">
     {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}

     {/* {badgeText !== '' && <div className="card--badge">{badgeText}</div>} */}

     {badgeText && <div className="card--badge">{badgeText}</div>}

      <img className="cardImg" src={props.item.coverImg} alt="" />
      <div className="cardContent">
        <div className="flexRow">
          <img className="star flexRow" src={star} alt="" />
          <span className="">{props.item.stats.rating}</span>
          <span className="gray">&nbsp;({props.item.stats.reviewCount})&nbsp;•&nbsp;</span>
          <span className="gray">{props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p>
          <span className="bold">From ${props.item.price}</span> / person
        </p>
      </div>
    </div>
  );
}
