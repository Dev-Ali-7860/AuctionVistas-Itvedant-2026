import { NavLink } from 'react-router-dom';
import aboutstory from '../assets/aboutstory.png';

const About = () => {
    return (
        <>
            <section>
                <div className="header-about">
                    <p>LEARN · BID · OWN</p>
                    <h3>About Us</h3>
                    <p>Your Trusted Auction Partner</p>
                </div>
            </section>

            <section className="story">
                <div className="img">
                    <img src={aboutstory} alt="AuctionVistas" />
                </div>

                <div className="story-body">
                    <h5>Our Story</h5>
                    <h3>About AuctionVistas</h3>
                    <p>`AuctionVistas is a modern auction platform designed for everyone — collectors,
                        enthusiasts and buyers. Our mission is to make auctions simple, transparent and exciting,
                        bringing rare and valuable items closer to you.`</p>
                    <p>From luxury watches and fine art to sneakers and collectibles,
                        AuctionVistas offers a trusted and secure space to bid,
                        compete and own something extraordinary.</p>
                </div>

                <div className="features-about">
                    <h4><i class="fa-solid fa-shield-halved"></i>Trusted & Secure</h4>
                    <p>Your safety is our priority.</p>
                    <h4><i class="fa-solid fa-gavel"></i>Fair Bidding</h4>
                    <p>Transparent and honest auctions.</p>
                    <h4><i class="fa-solid fa-globe"></i>Global Access</h4>
                    <p>Bid from anywhere, anytime.</p>
                    <h4><i class="fa-solid fa-headset"></i>Exceptional Support</h4>
                    <p>We're here to help you.</p>
                </div>
            </section>

            <section className="statistics-about">
                <div className="statistics">
                    <h4><i className="fa-solid fa-gavel"></i>1K+</h4>
                    <p>Happy Bidders</p>
                    <h4><i className="fa-solid fa-gem"></i>500+</h4>
                    <p>Premium Items</p>
                    <h4><i className="fa-solid fa-users"></i>100%</h4>
                    <p>Trusted Platform</p>
                    <h4><i className="fa-solid fa-trophy"></i>24/7</h4>
                    <p>Support</p>
                </div>
            </section>

            <section className='Join'>
                <h3>Join AuctionVistas Today</h3>
                <p>Discover rare treasures, place your bid, and be part of our growing community.</p>
                <NavLink to={'/browse_auctions'}>Explore Auctions →</NavLink>
            </section>
        </>
    )
}

export default About
