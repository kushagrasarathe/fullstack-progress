import Quiz from '@/components/Quiz';
import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {

  const [quiz, setQuiz] = useState([])
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])


  async function fetchData() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple&category=18"
      );
      const data = await response.json();

      let quizArr = [];

      data.results.map((obj, idx) => {
        // console.log(obj);
        const randomNum = Math.floor(Math.random() * 4);
        obj.incorrect_answers.splice(randomNum, 0, obj.correct_answer);

        quizArr.push({
          id: idx,
          question: obj.question
            .replace(/&#039;/g, "'").replace(/&#62;/g, ">").replace(/&#60;/g, "<").replace(/&apos;/g, "'").replace(/&amp;/g, "&")
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&gt;/g, ">")
            .replace(/&lt;/g, "<")
          ,
          options: obj.incorrect_answers,
          correct_answer: obj.correct_answer,
        });
      });
      setQuiz(quizArr);
    } catch (err) {
      console.log(err);
    }
  }

  // setInterval( () =>  console.log(correctAnswers), 1000)

  function resetGame() {
    fetchData()
    setScore(0)
    setIsCorrect([])
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Quizzical Trivia | Kushagra Sarathe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' md:px-12 px-3 py-5'> 
        <div className=' flex justify-between items-center flex-wrap '>
        <h1 className=' font-bold  m-2 mb-0 text-3xl'>Quizzical Trivia</h1>
        <span className=' m-2 mb-0 text-lg'>Score: {score}</span>
        </div>
        <div>
          <Quiz quizArr={quiz} isCorrect={isCorrect} setIsCorrect={setIsCorrect} score={score} setScore={setScore} resetGame={resetGame} />
        </div>
      </main>
    </>
  )
}
