import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className='nav' >
        <img className='nav-logo' src={logo} />
        <h1 className='nav-title'>Meme Generator</h1>
        <h4 className='nav-subtitle'>React Project</h4>
    </nav>
  )
}
