import React from "react";

export default function Button(props) {
  return (
    <div className="m-2">
      <button className="btn btn-primary">
        {props.btnTitle}
      </button>
    </div>
  );
}
