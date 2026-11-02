import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import { useForm } from 'react-hook-form'

const Footer = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm();

  function formSubmit() {
    alert(`Thank you for subscribing!You'll receive the latest auctions and exclusive updates in your inbox.`);
    reset();
  }

  return (
    <footer className='footer-section'>
      <section className='search-footer'>
        <div>
          <h3>Never miss a closing bell</h3>
          <p>Get ending-soon alerts and new rare listings in your inbox.</p>
        </div>

        <div className='newsletter-form'>
          <input type="email"
            placeholder="you@gmail.com"
            {...register('email', {
              required: 'Please enter your email address.',
              pattern: {
                value: /^[A-Za-z0-9]+@gmail\.com$/,
                message: 'Please enter a valid email address.'
              }
            })}
            name="email" aria-label="Email address" />
            <br />{errors.email && <p>{errors.email.message}</p>}

          <button type="button" onClick={handleSubmit(formSubmit)}>Subscribe</button>
        </div>
      </section>

      <section className='brand-details'>
        <div className='footer-brand'>
          <div className='footer-brand-heading'>
            <img src={logo} alt='AuctionVistas logo' />
            <h2 className='footer-brand-name'>Auction<span>Vistas</span></h2>
          </div>
          <p>Discover. Bid. Win. India's trusted marketplace for rare, verified and collectible finds.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className='container-fluid Marketplace'>
          <h4>MARKETPLACE</h4>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to='/browse_auctions'>Watches</NavLink>
          <NavLink to='/art'>Art</NavLink>
          <NavLink to='/jewellery'>Jewellery</NavLink>
        </div>

        <div className='container-fluid Support'>
          <h4>SUPPORT</h4>
          <NavLink to={'/contact'}>Contact</NavLink>
          <NavLink to='/How_its_works'>How it works</NavLink>
        </div>

        <div className='container-fluid Company'>
          <h4>COMPANY</h4>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/terms'>Terms</NavLink>
          <NavLink to='/policy'>Privacy Policy</NavLink>
        </div>
      </section>
      <hr></hr>

      <div className='copyright'>
        <p>© 2026 AuctionVistas. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
