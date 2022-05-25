import "./App.css";
import Card from "./components/Card";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="cards-div">
        <Card
          img={image1}
          rating={`"5.0"`}
          reviewCount={`(6)`}
          country={`India`}
          title={`Life Lessons with Katie Zaferes`}
          price={136}
        />
        <Card
          img={image2}
          rating={`"5.0"`}
          reviewCount={`(6)`}
          country={`India`}
          title={`Life Lessons with Katie Zaferes`}
          price={136}
        />
        <Card
          img={image1}
          rating={`"5.0"`}
          reviewCount={`(6)`}
          country={`India`}
          title={`Life Lessons with Katie Zaferes`}
          price={136}
        />
      </div>
    </div>
  );
}

export default App;
