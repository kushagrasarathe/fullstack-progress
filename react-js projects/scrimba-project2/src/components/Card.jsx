import React from "react";
import pin from "../assets/location.png";

export default function Card(props) {
  return (
    <div className="main">
      <div className="card">
        <img src={props.item.image} alt="" className="card-image" />
        <div className="location-details ">
          <img src={pin} />
          <span className="location">{props.item.location}</span>
          <a href={props.item.googleMapsUrl}> View on Google Maps</a>
        </div>
        <div className="flex-col">
          <h2>{props.item.title}</h2>
          <span className="card-date">
            {props.item.startDate} - {props.item.endDate}
          </span>
          <p className="card-desc">{props.item.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
