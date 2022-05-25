import React from "react";

export default function Joke(props) {
  return (
    <div>
      {/* conditional rendering of setup, if it exists than it will be rendered */}
      {props.setup && <h3>Setup: {props.setup}</h3>}

      {/* 
            other way around for conditional rendering
            <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
        */}
      <h2>{props.punchline}</h2>
    </div>
  );
}
