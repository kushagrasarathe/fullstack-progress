import React, { useEffect, useState } from "react";
import "./App.css";

interface APIData {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

interface Quiz {
  id: number;
  question: string;
  options: string[];
}

interface QuizAnswers {
  id: number;
  correctOption: string;
}

function App() {
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  const [correctOptions, setCorrectOptions] = useState<QuizAnswers[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple&category=18"
      );
      const data = await response.json();
      let quizArr: Quiz[] = [];
      let correctAnswers: QuizAnswers[] = [];

      data.results.map((obj: APIData, idx: number) => {
        // console.log(obj);
        const randomNum = Math.floor(Math.random() * 4);
        obj.incorrect_answers.splice(randomNum, 0, obj.correct_answer);
        quizArr.push({
          id: idx,
          question: obj.question,
          options: obj.incorrect_answers,
        });

        correctAnswers.push({
          id: idx,
          correctOption: obj.correct_answer,
        });
      });
      setQuiz(quizArr);
      setCorrectOptions(correctAnswers);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(quiz);
  console.log(correctOptions);

  return <div className="App"></div>;
}

export default App;
