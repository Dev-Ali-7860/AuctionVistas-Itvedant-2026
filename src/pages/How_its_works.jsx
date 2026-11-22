import React from 'react'
import { NavLink } from 'react-router-dom'

const How_its_works = () => {
  return (
    <main className='how-it-works'>
      <section className='how-hero'>
        <span className='how-eyebrow'>A SIMPLE WAY TO DISCOVER SOMETHING SPECIAL</span>
        <h1>How AuctionVistas Works</h1>
        <p>Find something you love, place your bid, and enjoy the thrill of the auction.</p>
        <NavLink className='how-primary-link' to='/browse_auctions'>Explore Auctions</NavLink>
      </section>

      <section className='how-steps'>
        <div className='how-section-heading'>
          <span className='how-eyebrow'>YOUR AUCTION JOURNEY</span>
          <h2>Four steps to your next great find</h2>
        </div>

        <div className='how-steps-grid'>
          <article className='how-step-card'>
            <span className='how-step-number'>01</span>
            <span className='how-step-icon'><i className='fa-solid fa-magnifying-glass'></i></span>
            <h3>Discover</h3>
            <p>Browse a curated collection of watches, art, fashion, and more.</p>
          </article>

          <article className='how-step-card'>
            <span className='how-step-number'>02</span>
            <span className='how-step-icon'><i className='fa-solid fa-user-plus'></i></span>
            <h3>Create an account</h3>
            <p>Sign up to take part and keep track of the auctions you love.</p>
          </article>

          <article className='how-step-card'>
            <span className='how-step-number'>03</span>
            <span className='how-step-icon'><i className='fa-solid fa-gavel'></i></span>
            <h3>Place your bid</h3>
            <p>Choose your bid, follow the auction, and raise it when you like.</p>
          </article>

          <article className='how-step-card'>
            <span className='how-step-number'>04</span>
            <span className='how-step-icon'><i className='fa-solid fa-trophy'></i></span>
            <h3>Win and enjoy</h3>
            <p>When you win, follow the next steps to complete your purchase.</p>
          </article>
        </div>
      </section>

      <section className='how-cta'>
        <div>
          <span className='how-eyebrow'>READY WHEN YOU ARE</span>
          <h2>Your next favourite find is waiting.</h2>
          <p>Explore the collection and join an auction today.</p>
        </div>
        <NavLink className='how-secondary-link' to='/register'>Create an account</NavLink>
      </section>
    </main>
  )
}

export default How_its_works
