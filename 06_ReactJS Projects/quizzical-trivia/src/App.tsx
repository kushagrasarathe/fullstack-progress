import React, { useEffect } from "react";
import "./App.css";
import Question from "./components/Question";
import { useState } from "react";

interface ResultArray {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

function App() {
  const [quiz, setQuiz] = useState<ResultArray[]>([]);
  const [score, setScore] = useState<number>(0)
  
  useEffect(() => {
    getQuiz();
  }, []);
  
  const getQuiz = () => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&category=18")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setQuiz(data.results);
      });
  };


  return (
    <div className=" py-5">
      <h1 className=" text-center text-2xl font-bold my-4 underline">Quizical Trivia </h1>
      <div>
        {
          quiz?.map((obj, key) => <Question key={key} question={obj.question} options={obj.incorrect_answers} answer={obj.correct_answer}  />)
        }
      </div>
    </div>
  );
}

export default App;
