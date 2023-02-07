import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>

      {/* using old BrowserRouter method */}
      {/* <BrowserRouter>
        <header className=' w-full bg-purple-500 text-gray-100 rounded-sm py-2 px-6 mb-3'>
          <nav className=' flex justify-end w-full mx-auto my-0 items-center'>
            <h1 className=' font-semibold mr-auto'><Link to={'/'}>Jobarouter</Link></h1>
            <NavLink className={" font-semibold px-2 rounded-sm"} to={'/'}>Home</NavLink>
            <NavLink className={" font-semibold px-2 rounded-sm"} to={'about'}>About</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              // path='/' //or use 
              index
              element={<Home />} />
            <Route path='about' element={<About />} />
          </Routes>
        </main>
      </BrowserRouter> */}


      {/* Navbar component created using new createBrowserRouter function */}
      <Navbar />
      <h1>Kis</h1>
    </>
  );
}

export default App;
