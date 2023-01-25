import React, { useEffect, useState } from "react";




interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function Question({ question, options, answer }: Question) {
  const [option, setOption] = useState<string[]>([]);

  function temp() {
    //  arr = 3 options
    // string

    // 3 options and sting = []

    const arr: string[] = [];
    options.map((el) => {
      arr.push(el);
    });

    let rand: number = Math.floor(Math.random() * 4);
    arr.splice(rand, 0, answer);
    // console.log(arr)
    setOption(arr);

  }

  useEffect(() => {
    temp();
  }, []);
  console.log(answer)

  return (
    <div>
      <h3>{question}</h3>
      {option.map((el, key) => (
        <span className="quiz-option" key={key}>{el}</span>
      ))}
    </div>
  );
}
