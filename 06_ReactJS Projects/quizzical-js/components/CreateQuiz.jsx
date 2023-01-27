import React, { useEffect, useState } from "react";

export default function CreateQuiz(props) {
  const { category, difficulty, startGame } = props;

  return (
    <div className=" w-full flex flex-col justify-center items-center min-h-screen">
      <h1 className=" text-2xl font-bold text-center">Quizzical Trivia</h1>
      <p className=" mt-3  text-base">Create a quiz and test your knowledge!</p>
      <div className="  my-5 flex flex-col justify-start items-center">
        <div className=" m-3 flex justify-between items-center w-full">
          <span className=" text-lg">Select Category: </span>
          <select
            name="category"
            id="category"
            className={` w-64 hover:bg-[#BAC5FA] bg-[#D6DBF5] rounded-md px-3 py-2 cursor-pointer`}
            onChange={(e) => category(e.target.value)}
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>
        <div className=" m-3 flex justify-between items-center w-full">
          <span className=" text-lg">Select Difficulty: </span>
          <select
            name="difficulty"
            id="difficulty"
            className=" w-64  hover:bg-[#BAC5FA] bg-[#D6DBF5] rounded-md px-3 py-2 cursor-pointer"
            onChange={(e) => difficulty(e.target.value)}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          onClick={startGame}
          type="button"
          className="my-3 ml-8 inline-block px-6 py-2.5 bg-[#4D5B9E] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#3d4d9c] hover:shadow-lg focus:bg-[#3d4d9c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
