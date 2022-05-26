import "./App.css";
import Card from "./components/Card";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

// import image1 from "./assets/image1.png";
// import image2 from "./assets/image2.png";
// import image3 from "./assets/image3.png";

import data from "./data"

console.log(data)


function App() {

  const cards = data.map((item) =>  {
    return (
      <Card
                key={item.id}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}

                // passing whole object at once
                item={item}

                // using object spread syntax of es6
                // {...item}

            />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="cards-div">

        {cards}
        {/* <Card
          // img={image1}
          rating={`"5.0"`}
          reviewCount={`(6)`}
          country={`India`}
          title={`Life Lessons with Katie Zaferes`}
          price={136}
        />
        <Card
          // img={image2}
          rating={`"5.0"`}
          reviewCount={`(6)`}
          country={`India`}
          title={`Life Lessons with Katie Zaferes`}
          price={136}
        />
        <Card
          // img={image1}
          rating={`"5.0"`}
          reviewCount={`(6)`}
          country={`India`}
          title={`Life Lessons with Katie Zaferes`}
          price={136}
        /> */}
      </div>
    </div>
  );
}

export default App;
