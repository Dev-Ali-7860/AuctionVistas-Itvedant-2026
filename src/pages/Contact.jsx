import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm();

  function formSubmit() {
    alert(`✅ Thank you for contacting ShopKart!
              Your message has been submitted successfully.
              Our team will get back to you soon.`)
    reset();
  }

  return (
    <div>
      <section className='heading-contact'>
        <div className='heading'>
          <p>LEARN · BID · OWN</p>
          <h3>Contact Us</h3>
          <p>We’d Love to Hear From You</p>
        </div>
      </section>

      <section className='body-contact'>
        <div className='details'>
          <h3>Get in Touch</h3>
          <p>Have a question, suggestion, or need assistance?
            Our team is here to help you.</p>
          <h3>📍 Our Office</h3>
          <p>123 Auction House Lane,
            Pune, Maharashtra – 411001, India</p>
          <h3>✉️ Email Us</h3>
          <p>support@auctionvistas.com</p>
          <h3>📞 Call Us</h3>
          <p>+1800 00 1800</p>
          <h3>◷ Business Hours</h3>
          <p>`Mon – Sat: 9:00 AM – 8:00 PM`
            `(Sun: 10:00 AM – 5:00 PM)`</p>
          <h3>Follow Us</h3>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-telegram"></i>
        </div>

        <div className='form'>
          <form onSubmit={handleSubmit(formSubmit)}>
            <h3>Send Us a Message</h3>
            <p>Fill out the Form below and we'll get back to you shortly</p>
            <input type='text'
              placeholder='👤 Your Name'
              {...register('name', {
                required: 'Name is Required',
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}

            <input type='email'
              placeholder='✉️ Your Email'
              {...register('email', {
                required: 'Email is Required',
                pattern: {
                  value: /^[A-Za-z0-9]+@gmail\.com$/,
                  message: 'Please enter a valid email (e.g., example@gmail.com).'
                }
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <select id="subject" className="form-select" defaultValue="" required>
              <option value="" disabled>☰ Select a subject</option>
              <option>Payment Issues</option>
              <option>Shipping & Delivery</option>
              <option>Returns & Refunds</option>
              <option>Product Inquiry</option>
              <option>Account Issues</option>
              <option>Technical Support</option>
              <option>Other</option>
            </select>

            <textarea rows='5'
              placeholder='📝 Your Message...'
              {...register('message', {
                required: 'Please enter your query or concern.',
                min: {
                  value: 500,
                  message: 'Your message cannot exceed 500 characters.'
                }
              })}
            />
            {errors.message && <p>{errors.message.message}</p>}

            <button onClick={() => reset()}>➤ Send Message →</button>
          </form>
        </div>
      </section>

      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.75965574005!2d73.85529461076874!3d18.449218582558142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb00109c8a5d%3A0xdcdbaea7c651f7cd!2sItvedant%20-%20Katraj!5e0!3m2!1sen!2sin!4v1792996250635!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  )
}

export default Contact
