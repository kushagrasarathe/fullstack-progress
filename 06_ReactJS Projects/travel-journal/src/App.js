import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const places = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="">
      <Navbar />
      <div className="">
      {places}
      </div>
    </div>
  );
}

export default App;
