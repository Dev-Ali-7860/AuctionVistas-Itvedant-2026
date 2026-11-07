import React from 'react'
import heroImg from '../assets/hero-img.png';
import browseData from '../data/browse_data';
import Clothing from '../assets/Clothing.png';
import shoes from '../assets/shoes.png';
import electronic from '../assets/electronic.png';
import accs from '../assets/accs.png';
import bags from '../assets/bags.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const featuredAuctions = browseData.slice(0, 3);

const Home = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();

  function formSubmit({ search }) {
    navigate(`/browse_auctions?q=${encodeURIComponent(search.trim())}`);
    reset();
  }

  return (
    <div className='home'>
      <section className='hero'>
        <div className='hero-copy'>
          <h2>Discover. Bid. Win.</h2>
          <p>India's trusted marketplace for rare, verified and collectible finds.</p>

          <div className='search_bar'>
            <form onSubmit={handleSubmit(formSubmit)}>
              <input type='text'
                placeholder='Search watches, art, sneakers…'
                name='search'
                aria-label='Search auctions'
                {...register('search', {
                  required: 'Please enter a product name to search.',
                  validate: value =>
                    value.trim() !== "" || "Search field cannot contain only spaces."
                })}
              />
              {errors.search && <p className="text-danger">{errors.search.message}</p>}
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        <div className='img-hero'>
          <img src={heroImg} alt='Collectible watch, artwork, and sneaker at auction' />
        </div>
      </section>

      <section className='Featured'>
        <div className='container-fluid'>
          <h3>Featured Auctions</h3>
        </div>

        <div className='featured-grid'>
          {featuredAuctions.map((item, index) => (
            <div className='auction-card' key={`${item.title}-${index}`}>
              <img className='auction-card-image' src={item.image} alt={item.title} />
              <div className='auction-card-body'>
                <div className='auction-meta'>
                  <span>{item.category}</span>
                  <span>{item.bid}</span>
                </div>
                <h4 className='auction-title'>{item.title}</h4>
                <div className='auction-price-row'>
                  <p>Current Bid</p>
                  <h4>₹ {item.price}</h4>
                </div>
                <p className='auction-time'>Ends In {item.endtime}</p>
                <button className='auction-btn'>Place Bid</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='browse-auctions'>
        <div className=' row category'>
          <h3>Explore Bids by Category</h3>
          <div className='col-7'>
            <img src={electronic} alt='device' />
            <h3>Electronics</h3>
            <NavLink to={'/browse_auctions'}>View More</NavLink>
          </div>

          <div className='col-5'>
            <img src={Clothing} alt='device' />
            <h3>Clothing</h3>
            <NavLink to={'/browse_auctions'}>View More</NavLink>
          </div>
        </div>

        <div className=' row category'>
          <div className='col-5'>
            <img src={accs} alt='device' />
            <h3>Accessories</h3>
            <NavLink to={'/browse_auctions'}>View More</NavLink>
          </div>

          <div className='col-4'>
            <img src={shoes} alt='device' />
            <h3> Shoes </h3>
            <NavLink to={'/browse_auctions'}>View More</NavLink>
          </div>

          <div className='col-3'>
            <img src={bags} alt='device' />
            <h3>Bags</h3>
            <NavLink to={'/browse_auctions'}>View More</NavLink>
          </div>
        </div>
      </section>

      <section>
        <div className='service'>
          <p><strong>✔ Verified sellers</strong></p>
          <p>ID-checked</p>
        </div>

        <div className='service'>
          <p><strong>🔒 Secure payments</strong></p>
          <p>Protected checkout</p>
        </div>

        <div className='service'>
          <p><strong>⚖ Fair bidding</strong></p>
          <p>Real-time, no shill bids</p>
        </div>

        <div className='service'>
          <p><strong>📦 Tracked delivery</strong></p>
          <p>Insured shipping</p>
        </div>
      </section>
    </div>
  )
}

export default Home
