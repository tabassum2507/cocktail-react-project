import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png"
import "../index.css"


const Navbar = () => {
  return (
    <nav className='navbar' >
      <div className='nav-center'>
       
          <img src={logo} alt="logo" className='logo' />
        
        <ul className='nav-links'>

          
          <li>
            Home
          </li>
          <li>
            About
          </li>
        </ul> 

      </div>  
      
    </nav>
  )
}

export default Navbar