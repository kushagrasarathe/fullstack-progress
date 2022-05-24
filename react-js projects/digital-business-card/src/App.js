import About from './components/About';
import Interests from './components/Interests';
import Socials from './components/Socials';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
        <div className='layout'>    
        <Info />
        <About />
        <Interests />
        <Socials />
        </div>
    </div>
  );
}

export default App;
