import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="site-navbar navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="site-navbar-content container-fluid">
                <div className="site-brand-lockup">
                    <NavLink className='site-brand-link' to='/'>
                        <img src={logo} alt='AuctionVistas logo' />
                        <h2 className="site-brand">Auction<span>Vistas</span></h2>
                    </NavLink>
                </div>
                <ul className='site-nav-links'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/browse_auctions'>Browse Auctions</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/create_auction'>Create Auction</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
