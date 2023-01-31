import { useState } from "react";
import "./App.css";

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState( () => "Jack" );

  function onAddName() {
    // list.push(name);
    setList([...list, name]);
    setName("");
  }

  return (
    <div>
      <ul>
        {list.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count} </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
