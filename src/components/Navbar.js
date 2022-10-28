import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className="_navbar">
        <div className="container">
            <img src={Logo} alt="" />
            <div>LINKS</div>
            <div>SHOPPING</div>
        </div>
    </nav>
    
  )
}

export default Navbar