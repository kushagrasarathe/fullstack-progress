import React from "react"
import Navbar from "./components/Navbar"
import Main from './components/Main'

export default function App() {
    const [toggleTheme, setToggleTheme] = React.useState(false)
    
    function toggleDarkMode() {
        setToggleTheme( prevTheme => !prevTheme )
        console.log(toggleTheme)
    }
    
    return (
        <div className="container">
            <Navbar 
                toggleDarkMode={toggleDarkMode} 
                darkMode={toggleTheme}
                />
            <Main 
                darkMode={toggleTheme}
                />
        </div>
    )
}