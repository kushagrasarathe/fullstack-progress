import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar title={"Xpense Tracker"} link1={"Dashboard"} link2={"Add Bill"} link3={"History"} />
    </>
  );
}

export default App;
