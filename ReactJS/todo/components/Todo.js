import React from "react";
import Test from "./Test";

export default function Todo(props) {
  return (
    <div>
      <ul>
        {props.todo.map( item => {
            return <li>{item}</li>
        } )}
      </ul>
    </div>
  );
}