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

  const getQuiz = () => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
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

  useEffect(() => {
    getQuiz();
  }, []);
  // console.log(quiz);

  return (
    <div className="App">
      <h1>Quizical Trivia</h1>
      <div> 

    {
      quiz?.map( (obj, key) => <Question key={key} question={obj.question} options={obj.incorrect_answers} answer={obj.correct_answer} /> )
    }

      </div>
    </div>
  );
}

export default App;
