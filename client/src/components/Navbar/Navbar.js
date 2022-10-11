import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
    <ul>
    <li>
    <NavLink to ="/">
    Meditation
    </NavLink>
    </li>
    <li>
    <NavLink to ="/mind">
    Mindfulness
    </NavLink>
    </li>
    <li>
    <NavLink to ="/movement">
    Movement
    </NavLink>
    </li>

    <li>
    <NavLink to ="/mantra">
    Mantra
    </NavLink>
    </li>
    
    </ul>
    </nav>
  )
}

export default Navbar