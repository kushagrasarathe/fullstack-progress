import React, { useState } from 'react'

export default function Quiz(props) {

    // {
    //     quiz1: '',
    //     quiz2: '',
    //     quiz3: '',
    //     quiz4: '',
    //     quiz5: '',
    // }
    // console.log(props.quiz)



    // function saveUserSelectedOptions(position, selectedOption) {
    //     setUserSelectedArr[position] = selectedOption
    //     // arr.splice(2, 0, "Lene");
    // }

    let setUserSelectedArr = []
    let setCorrectAnswers = [];

    function saveUserSelectedOptions(position, selectedOption, correctAnswer) {
        setUserSelectedArr[position] = selectedOption
        setCorrectAnswers[position] = correctAnswer

        return [setUserSelectedArr, setCorrectAnswers]
        // console.log(object);
    }


    function submitAnswers() {
        const arr = saveUserSelectedOptions()
        // console.log(arr)
        let submitted = arr[0]
        let answers = arr[1]

        // console.log(answers);

        for (let i = 0; i < 5; i++) {
            if (submitted[i]) {

                submitted[i] === answers[i] ?
                    props.setScore(prevScore => prevScore + 1) :
                    console.log(`Option ${i + 1} is wrong, correct answer is ${answers[i]}`) 
            } else {
                console.log(`You didn't choose an option for question ${i + 1}`);
            }
        }


        // if (submitted[0] === answers[0]) {
        //     console.log("Quiz 1 Correct")
        // } else
        //     if (submitted[1] === answers[1]) {
        //         console.log("Quiz 2 Correct")
        //     } else
        //         if (submitted[2] === answers[2]) {
        //             console.log("Quiz 3 Correct")
        //         } else
        //             if (submitted[3] === answers[3]) {
        //                 console.log("Quiz 4 Correct")
        //             } else
        //                 if (submitted[4] === answers[5]) {
        //                     console.log("Quiz 5 Correct")
        //                 }

    }
    // console.log(score)

    // setInterval(() => console.log("User SWelected Options: " + setUserSelectedArr, "\n" + "Correct Options: " + setCorrectAnswers), 15000)

    return (
        <div>
            <div>
                {
                    props.quizArr.map((quiz, index) => {
                        // console.log(quiz)
                        return <div key={index}>
                            <h1>{quiz.question}</h1>
                            <div className=' flex flex-col justify-center items-start flex-wrap'>
                                {quiz.options.map((option, idx) => {
                                    return <div
                                        onClick={() => saveUserSelectedOptions(index, option, quiz.correct_answer)}
                                        className={` bg-purple-500 px-3 py-2 rounded-md w-64 m-2 cursor-pointer hover:bg-purple-400`}
                                        key={idx}>{option}</div>
                                })}
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                <button
                    onClick={submitAnswers}
                    type="button" className="my-4 mx-3 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Submit Answers</button>
            </div>
            <div>
                <h2>Score:{props.score}</h2>
            </div>

            <button
            onClick={props.resetGame}
            type="button" className="my-4 mx-3 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Reset Game</button>
        </div>
    )
}
