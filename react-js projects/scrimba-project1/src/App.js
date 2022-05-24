import './styles.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
        <main>
          <Navbar />
          <MainContent />
        </main>
    </div>
  );
}

export default App;
