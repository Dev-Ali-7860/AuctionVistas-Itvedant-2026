import React from 'react'
import { NavLink } from 'react-router-dom'

const Privacy = () => {
  return (
    <main className='terms-page'>
      <header className='terms-hero'>
        <span>AUCTIONVISTAS</span>
        <h1>Privacy Policy</h1>
        <p>How we handle information when you use our marketplace.</p>
      </header>

      <article className='terms-content'>
        <p className='terms-intro'>
          Your privacy matters to us. This policy explains what information you may provide when
          using AuctionVistas and how it supports your marketplace experience.
        </p>

        <section>
          <h2>1. Information you provide</h2>
          <p>
            When you create an account, contact us, or participate in an auction, you may provide
            details such as your name, email address, account information, messages, and bids.
          </p>
        </section>

        <section>
          <h2>2. How information is used</h2>
          <p>
            We use the information you provide to operate your account, support bidding and
            purchases, respond to questions, send relevant service updates, and help protect the
            marketplace.
          </p>
        </section>

        <section>
          <h2>3. Sharing information</h2>
          <p>
            We do not sell your personal information. Information may be shared when needed to
            provide a requested service, complete an auction transaction, comply with applicable
            law, or protect users and AuctionVistas.
          </p>
        </section>

        <section>
          <h2>4. Keeping information safe</h2>
          <p>
            We take reasonable steps to protect information from unauthorized access or misuse.
            No method of online storage or transmission can be guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2>5. Your choices</h2>
          <p>
            Keep your account details current and contact us if you need help accessing or
            correcting information you have provided. You can also contact us with questions
            about communications you receive.
          </p>
        </section>

        <section>
          <h2>6. Changes to this policy</h2>
          <p>
            We may update this policy as the website or our practices change. The latest version
            will be posted on this page.
          </p>
        </section>

        <section>
          <h2>7. Contact us</h2>
          <p>
            For privacy questions, please contact us through our{' '}
            <NavLink to='/contact'>Contact page</NavLink>.
          </p>
        </section>

        <p className='terms-note'>
          This page provides general privacy information. Review it for accuracy and applicable
          local privacy requirements before publishing.
        </p>
      </article>
    </main>
  )
}

export default Privacy