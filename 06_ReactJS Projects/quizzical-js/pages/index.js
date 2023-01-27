import CreateQuiz from '@/components/CreateQuiz';
import Quiz from '@/components/Quiz';
import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {

  const [quiz, setQuiz] = useState([])
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState([]);
  const [category, setCategory] = useState(0)
  const [difficulty, setDifficulty] = useState('')
  const [startGame, setStartGame] = useState(false)

  async function fetchData(category, difficulty) {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&type=multiple&category=${category}&difficulty=${difficulty}`
      );
      const data = await response.json();

      let quizArr = [];

      data.results.map((obj, idx) => {
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


  function resetGame(category, difficulty) {
    fetchData( category, difficulty )
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



      {
        startGame ? <main className=' md:px-12 px-3 py-5'>

          <div className=' flex justify-between items-center flex-wrap '>
            <h1 className=' font-bold  m-2 mb-0 text-3xl'>Quizzical Trivia</h1>
            <span className=' m-2 mb-0 text-lg'>Score: {score} / 5</span>
          </div>
          <div>
            <Quiz quizArr={quiz} isCorrect={isCorrect} setIsCorrect={setIsCorrect} score={score} setScore={setScore} resetGame={() => resetGame(category, difficulty) } newGame={() => setStartGame(false)} />
          </div>
        </main> : <div>
          <CreateQuiz startGame={() => {
            fetchData(category, difficulty)
            setStartGame(true)
          }} category={setCategory} difficulty={setDifficulty} />
        </div>
      }

    </>
  )
}
