import React from "react";
import memesData from "../memesData";

export default function Form() {

    function getMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

  return (
    <div className="form">
      <div className="form-input">
        <input className="input" type={'text'} />
        <input className="input" type={'text'} />
      </div>
        <button className="button" onClick={getMeme}>Get a new Image 🖼 </button>
    </div>
  );
}
