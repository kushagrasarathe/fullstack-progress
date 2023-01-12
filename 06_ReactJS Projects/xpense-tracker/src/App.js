import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddBill from "./components/AddBill";
import History from "./components/History";

function App() {
  return (
    <>
      {/* We use router to link components */}
      <Router>
        <Navbar
          title={"Xpense Tracker"}
          link1={"Dashboard"}
          link2={"Add Expense"}
          link3={"History"}
        />

        {/* Switch was used in earlier versions of react-router-dom but routes are used in the latest version */}
        <Routes>
          {/* path is the path of of the component that we defined in navbar component, 
          here we link the component to that path
          and element is our component that we want to render*/}
          <Route
            path="/"
            element={
              <Home
                title={"This Month"}
                subTitle={"Overview"}
                scTitle1={"Budget"}
                scTitle2={"Remaining"}
                scTitle3={"Spent"}
                // budget={"$0"}
                remaining={"$0"}
                spent={"$0"}
              />
            }
          ></Route>

          <Route
          path="/add"
          element={<AddBill title={"Add New Expense"} />}
          ></Route>

          {/* <Route
            path="/history"
            element={<History title={"Overall Expense History"} />}
          ></Route> */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
