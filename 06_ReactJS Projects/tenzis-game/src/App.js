import "./App.css";
import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzis, setTenzis] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzis(true);
      // console.log("You Won");

    }
    // console.log(allHeld);
  }, [dice]);

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function rollDice() {
    if(!tenzis) {
      setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
    } else  {
      setTenzis(false)
      setDice(allNewDice)
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <main>
      {tenzis ? <Confetti /> : <span></span>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {dice.map((die) => (
          <Die
            holdDice={() => holdDice(die.id)}
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
          />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        

      {tenzis ? "New Game" : "Roll" }
      </button>
    </main>
  );
}

export default App;
