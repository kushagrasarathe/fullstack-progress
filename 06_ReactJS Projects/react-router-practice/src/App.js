import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <header className=' w-full'>
      <nav className=' flex gap-3 justify-end w-full mx-auto my-0 items-center'>
        <h1 className=' mr-auto border-b-2'>Jobarouter</h1>
        <NavLink className={" px-2 rounded-sm"} to={'/'}>Home</NavLink>
        <NavLink className={" px-2 rounded-sm"}  to={'about'}>About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route 
            // path='/' //or use 
            index
            element={<Home/>} />
          <Route path='about' element={<About/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
