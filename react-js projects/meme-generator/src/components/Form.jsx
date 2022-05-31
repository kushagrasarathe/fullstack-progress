import React from "react";
import memesData from "../memesData";

export default function Form() {
  // const [memeImage, setMemeImage] = React.useState('')

  // function getMeme() {
  //   const memesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   const image = memesArray[randomNumber].url;
  //   setMemeImage(image);
  //   console.log(image);
  // }

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <>
      <div className="form">
        <div className="form-input">
          <input className="input" type={"text"} />
          <input className="input" type={"text"} />
        </div>
        <button className="button" onClick={getMemeImage}>
          Get a new Image 🖼{" "}
        </button>
      </div>
      <div className="meme-div">
        <img className="meme-image" src={meme.randomImage} />
      </div>
    </>
  );
}
