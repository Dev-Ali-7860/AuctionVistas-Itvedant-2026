import React, { useState } from 'react'
import angle2 from '../assets/angle2.png';
import angle3 from '../assets/angle3.png';
import angle4 from '../assets/angle4.png';
import { useForm } from 'react-hook-form';

const watchImages = [
    {
        src: 'https://www.watchclub.com/upload/watches/originali/watch-club-rolex-submariner-date-126613lb-latestmodel-ref-126613lb-year-2022-1698749461804-15544-5.jpg',
        alt: 'Rolex Submariner blue dial, front view'
    },
    { src: angle2, alt: 'Rolex Submariner side view' },
    { src: angle3, alt: 'Rolex Submariner bracelet detail' },
    { src: angle4, alt: 'Rolex Submariner in presentation box' }
];

const RolexWatch = () => {
    const [mainImage, setMainImage] = useState(watchImages[0]);
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm()

    function submitForm() {
        alert('Bids Placed Successfull');
        reset();
    }

    return (
        <div>
            <section className='RolexWatch'>
                <div className='img-rolex'>
                    <img src={mainImage.src} alt={mainImage.alt} />
                    {watchImages.slice(1).map((image) => (
                        <button
                            key={image.src}
                            type='button'
                            aria-label={`Show ${image.alt} as the main image`}
                            onClick={() => setMainImage(image)}
                        >
                            <img src={image.src} alt={image.alt} />
                        </button>
                    ))}
                </div>

                <div className='details-rolex'>
                    <h3>Rolex Submariner Blue Dial</h3>
                    <p>Category: watches . Luxury Watches</p>
                    <hr />
                    <h5>Current Bid</h5>
                    <h2>4,00,000 <span>Live</span></h2>
                    <hr />

                    <div className='hammer'>
                        <p><i className="fa-solid fa-hammer"></i> Total Bids </p>
                        <p>10 Bids</p>
                    </div>
                    <hr />

                    <div className='turn-up'>
                        <p><i className="fa-solid fa-arrow-trend-up"></i>Minimum Increment</p>
                        <p>₹5,000</p>
                    </div>

                    <hr />
                    <div className='fa-award'>
                        <p><i className="fa-solid fa-award"></i>Suggesting Starting Bid</p>
                        <p>₹3,50,000</p>
                    </div>

                    <hr />
                    <div className='fa-crosshairs'>
                        <p><i className="fa-solid fa-crosshairs"></i>Next Minimum Bids</p>
                        <p>₹4,05,000</p>
                    </div>
                    <hr />

                    <p><i className="fa-solid fa-alarm-clock"></i>Auction Ends In</p>
                    <p>02h : 08m : 50s</p>

                    <form onSubmit={handleSubmit(submitForm)}>
                        <label>Enter Amount :</label>
                        <input type='number'
                            placeholder='Enter your bid amount'
                            {...register('number', {
                                required: 'Amount is required to Place Bid',
                                min: {
                                    value: 405000,
                                    message: 'Your bid must be at least ₹4,05,000'
                                },
                                validate: value =>
                                    (value - 405000) % 5000 === 0 ||
                                    'Bid in increments of ₹5,000'
                            })}
                        />
                        <br /> {errors.number && <p>{errors.number.message}</p>}
                        <button type='submit'><i className="fa-solid fa-gavel"></i>Place Bid</button>
                    </form>
                </div>
            </section >

            <section className='prod-data'>
                <div className='product-details'>
                    <h3><i className="fa-solid fa-grip-lines"></i>Product Details</h3>
                    <p>Brand <span>Rolex</span></p>
                    <p>Model <span>Submariner</span></p>
                    <p>Category <span>Watches</span></p>
                    <p>Dial Colow <span>Blue</span></p>
                    <p>Bracelet <span>Two-tone Silver & Gold</span></p>
                    <p>Movement <span>Automatic</span></p>
                    <p>Condition <span>Not specified</span></p>
                    <p>Auction Type <span>Live Auction</span></p>
                </div>

                <div className='description'>
                    <h3><i className="fa-solid fa-note-sticky"></i> Description</h3>
                    <p>Experience timeless luxury with this Rolex Submariner featuring a stunning blue dial,
                        gold-accented bezel and elegant two-tone stainless steel and gold bracelet.
                        Its iconic design combines sophisticated styling with the
                        unmistakable appeal of a luxury sports watch.</p>
                    <p>A statement piece for collectors and watch enthusiasts.</p>
                </div>
            </section>

            <section>
                <div className='trust'>
                    <p><i className="fa-solid fa-shield"></i></p>
                    <p>100% Trusted Auction</p>
                </div>

                <div className='bidding'>
                    <p><i className="fa-solid fa-gavel"></i></p>
                    <p>Real Time Bidding</p>
                </div>

                <div className='support'>
                    <p><i className="fa-solid fa-headset"></i></p>
                    <p>24/7 Support</p>
                </div>

                <div className='collection'>
                    <p><i className="fa-regular fa-gem"></i></p>
                    <p>Premium Collection</p>
                </div>
            </section>
        </div >
    )
}

export default RolexWatch
