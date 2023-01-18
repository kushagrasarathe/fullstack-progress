import React, { useState, useEffect } from "react";
// import memesData from "../memesData";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setMemeImage] = useState({});

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeImage(data.data.memes))
}, [])

console.log(allMemeImages)

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const image = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: image,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          onChange={handleChange}
          value={meme.topText}
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button className="button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );

  // const [memeImage, setMemeImage] = React.useState('')

  // function getMeme() {
  //   const memesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   const image = memesArray[randomNumber].url;
  //   setMemeImage(image);
  //   console.log(image);
  // }

  // const [meme, setMeme] = React.useState({
  //   topText: "",
  //   bottomText: "",
  //   randomImage: "http://i.imgflip.com/1bij.jpg",
  // });

  // const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  // function getMemeImage() {
  //   const memesArray = allMemeImages.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   const url = memesArray[randomNumber].url;
  //   setMeme((prevMeme) => ({
  //     ...prevMeme,
  //     randomImage: url,
  //   }));
  // }

  // return (
  //   <>
  //     <div className="form">
  //       <div className="form-input">
  //         <input placeholder="Top text" className="input" type={"text"} />
  //         <input placeholder="Bottom text" className="input" type={"text"} />
  //       </div>
  //       <button className="button" onClick={getMemeImage}>
  //         Get a new Image 🖼{" "}
  //       </button>
  //     </div>
  //     {/* <div className="meme-div">
  //       <img className="meme-image" src={meme.randomImage} />
  //     </div> */}
  //     <div className="meme">
  //       <img src={meme.randomImage} className="meme--image" />
  //       <h2 className="meme--text top">One does not simply</h2>
  //       <h2 className="meme--text bottom">Walk into Mordor</h2>
  //     </div>
  //   </>
  // );
}
