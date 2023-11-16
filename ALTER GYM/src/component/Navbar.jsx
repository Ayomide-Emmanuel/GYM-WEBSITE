// import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import './styles/navbar.css'
const Navbar = () => {
  return (
    <nav>
        <Link to='#'><img src={logo} alt="" /></Link>
        <ul>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/location'>LOCATIONS</NavLink></li>
            <li><NavLink to='/about'>ABOUT US</NavLink></li>
            <li><NavLink to='/service'>SERVICE</NavLink></li>
            <li><NavLink to='/contact'>CONTACT US</NavLink></li>
            <li className='bg'><NavLink  to='/free trial' >FREE TRIAL</NavLink></li>
            <li className='bg'><NavLink to='/join'>JOIN</NavLink></li>







        </ul>
    </nav>
  )
}

export default Navbar