import React from "react";
import logo from '../assets/globe.png'

export default function Navbar() {
  return (
    <nav className="navbar">
       <img className="nav-logo" src={logo} />
        <h1 className="nav-title">My Travel Journal</h1>
    </nav>
  );
}
