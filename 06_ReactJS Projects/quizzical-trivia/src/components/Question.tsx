import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

interface Question {
  question: string;
  options: string[];
  answer: string;
  // isSelected: boolean
}

interface Options {
  id: string;
  option: string;
  isSelected: boolean;
}

// interface Selected {
//   id: string;
//   select: boolean;
// }

export default function Question({ question, options, answer }: Question) {
  const [option, setOption] = useState<Options[]>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    temp();
  }, []);

  function temp() {
    let arr: string[] = [];
    options.map((el) => {
      arr.push(el);
    });

    let rand: number = Math.floor(Math.random() * 4);
    arr.splice(rand, 0, answer);

    const arrWId: Options[] = [];
    arr.map((option) =>
      arrWId.push({
        id: nanoid(),
        option: option,
        isSelected: false,
      })
    );

    setOption(arrWId);
  }

  function holdDice(id: string) {
    let objIndex: number = option.findIndex((obj) => obj.id === id);
    option[objIndex].isSelected = true;
    if (objIndex === 0) {
      option[1].isSelected = false;
      option[2].isSelected = false;
      option[3].isSelected = false;
    } else if (objIndex === 1) {
      option[0].isSelected = false;
      option[2].isSelected = false;
      option[3].isSelected = false;
    } else if (objIndex === 2) {
      option[0].isSelected = false;
      option[1].isSelected = false;
      option[3].isSelected = false;
    } else if (objIndex === 3) {
      option[0].isSelected = false;
      option[1].isSelected = false;
      option[2].isSelected = false;
    }
    setIsSelected(!isSelected);
    // console.log(option);
  }

  function submitAnswer() {
    option.map((option) => {
      option.isSelected && option.option === answer
        ? console.log("Correct Answer")
        : console.log("Wrong Answer");
    });
  }

  return (
    <div className=" mt-4 py-4 md:px-20 flex justify-center flex-col items-start">
      <span className=" text-md text-start font-semibold">
        {question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
      </span>
      <div className=" w-full  my-2 flex justify-between items-center flex-wrap ">
        {option.map((option) => (
          <div
            onClick={() => holdDice(option.id)}
            className={` cursor-pointer`}
            key={option.id}
          >
            <span
              className={`${
                option.isSelected ? " bg-[#D6DBF5]" : "bg-white"
              } w-72 m-3  px-3 py-2 border border-gray-600 rounded-md text-sm font-semibold `}
            >
              {option.option}
            </span>
          </div>
        ))}
        {/* ${selected ? ' bg-[#D6DBF5]' : 'bg-white'}  */}
      </div>
      <button
        onClick={submitAnswer}
        className="m-3 bg-blue-500 rounded-md px-3 py-2 text-sm font-semibold text-white"
      >
        Submit
      </button>
    </div>
  );
}
