import React from "react";

export default function History(props) {
  return (
    <>
      <div className="card m-5 text-center text-white bg-dark">
        <h5 className="card-header border border-3 border-secondary">
          {props.title}
        </h5>
        <div className="card-body border border-3 border-secondary">
            <div className="d-flex justify-content-center row align-items-center h-100 card-deck">
          <ul class="list-group m-4 w-75 ">
            <li class="list-group-item m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li class="list-group-item m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li class="list-group-item m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li class="list-group-item m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li class="list-group-item m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li class="list-group-item m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li class="list-group-item m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}
