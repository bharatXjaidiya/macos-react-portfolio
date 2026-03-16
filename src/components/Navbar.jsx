import React from 'react'
import "./Navbar.scss"
import Time from './Time'
const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="nav-left">
            <img src="../public/navbar-icons/apple.svg" alt="" className="apple-icon" />
            <p>Bharat</p>
            <p>File</p>
            <p>Window</p>
            <p>Terminal</p>
        </div>
        <div className="nav-right">
            <img src="../public/navbar-icons/wifi.svg" alt="" className="wifi-icon" />
            <Time/>
        </div>
    </nav>
  )
}

export default Navbar
