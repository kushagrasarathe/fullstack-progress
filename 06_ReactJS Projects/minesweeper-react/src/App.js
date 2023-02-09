import Board from "./components/Board";

function App() {
  return (
    <div>
      <h1 className=" text-2xl font-semibold mt-5 mb-2">Minesweeper</h1>
      <div className=" m-8">
        <Board />
      </div>
    </div>
  );
}

export default App;
