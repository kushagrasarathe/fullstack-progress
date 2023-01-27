import React, { useEffect, useState } from "react";

export default function Quiz(props) {
  const [userSelected, setUserSelected] = useState([]);
  const [highlight, setHighlight] = useState(false);

  //   useEffect ( () => {
  //     submitAnswers()
  //   }, [props.isCorrect])

  let userSelectedOptions = [];
  let correctOptionsArr = [];
  let setBool = [];

  function saveUserSelectedOptions(position, selectedOption, correctAnswer) {
    userSelectedOptions[position] = {
      id: position,
      option: selectedOption,
      isSelected: true,
    };
    correctOptionsArr[position] = {
      id: position,
      option: correctAnswer,
      isSelected: false,
    };
    // setUserSelected((prev) => [
    //   {
    //     id: position,
    //     option: selectedOption,
    //     isSelected: true,
    //   },
    // ]);
    // setActive(true);
    return [userSelectedOptions, correctOptionsArr];
  }

  function submitAnswers() {
    const arr = saveUserSelectedOptions();
    let submitted = arr[0];
    let answers = arr[1];

    submitted.map((obj, index) => {
      if (obj.option === answers[index].option) {
        props.setScore((prevScore) => prevScore + 1);
        setBool[index] = "correct";
        props.setIsCorrect(setBool);
      } else {
        // props.setIsCorrect("wrong")
        setBool[index] = "wrong";
        props.setIsCorrect(setBool);
      }
    });


    // for (let i = 0; i < 5; i++) {
    //   if (submitted[i].option ) {
    //     submitted[i].option === answers[i].option
    //       ? props.setScore((prevScore) => prevScore + 1)
    //       : console.log(
    //           `Option ${i + 1} is wrong, correct answer is ${answers[i].option}`
    //         );
    //   } else if(submitted[i].option === undefined) {
    //     console.log(`You didn't choose an option for question ${i + 1}`);
    //   }
    // }
  }

  return (
    <div className="pb-5 leading-6 tracking-wide">
      <div className="">
        {props.quizArr.map((quiz, index) => {
          return (
            <div className=" my-4 " key={index}>
              <div className=" flex justify-between flex-wrap items-center">
                <h3 className=" m-2  text-lg font-normal max-w-xl">{quiz.question}</h3>
                <span className=" text-base">{props.isCorrect[index]}</span>
              </div>
              <div className=" flex justify-between items-stretch flex-wrap">
                {quiz.options.map((option, idx) => {
                  return (
                    <div
                      onClick={() => {
                        saveUserSelectedOptions(
                          index,
                          option,
                          quiz.correct_answer
                        );
                      }}
                      className={`
                      border
                       border-[#4D5B9E]
                     text-black px-3 py-2 rounded-md md:w-64 w-36 m-2 mt-4 cursor-pointer hover:bg-[#BAC5FA] bg-[#D6DBF5] `}
                      //  [#D6DBF5]
                      key={idx}
                    >
                      {option
                        .replace(/&#039;/g, "'")
                        .replace(/&#62;/g, ">")
                        .replace(/&#60;/g, "<")
                        .replace(/&apos;/g, "'")
                        .replace(/&amp;/g, "&")
                        .replace(/&quot;/g, '"')
                        .replace(/&apos;/g, "'")
                        .replace(/&gt;/g, ">")
                        .replace(/&lt;/g, "<")}
                    </div>
                  );
                })}
              </div>
              <hr className=" border-t m-2 mt-5" />

            </div>
            
          );
        })}
      </div>
      <div className="m-2 my-5 flex justify-start items-center">
        <button
          onClick={submitAnswers}
          type="button"
          className="inline-block px-6 py-2.5 bg-[#4D5B9E] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#3d4d9c] hover:shadow-lg focus:bg-[#3d4d9c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit Answers
        </button>
        {/* <h2>Score: {props.score}</h2> */}
        <button
          onClick={props.resetGame}
          type="button"
          className="my-4 mx-4 inline-block px-6 py-2.5 bg-[#4D5B9E] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#3d4d9c] hover:shadow-lg focus:bg-[#3d4d9c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Reset Game
        </button>
        <button
          onClick={props.newGame}
          type="button"
          className="my-4 mx-4 inline-block px-6 py-2.5 bg-[#4D5B9E] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#3d4d9c] hover:shadow-lg focus:bg-[#3d4d9c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          New Game
        </button>
      </div>
    </div>
  );
}
