import React from 'react'
import { NavLink } from 'react-router-dom'

const Terms = () => {
  return (
    <main className='terms-page'>
      <header className='terms-hero'>
        <span>AUCTIONVISTAS</span>
        <h1>Terms of Use</h1>
        <p>Please review these terms before using our marketplace.</p>
      </header>

      <article className='terms-content'>
        <p className='terms-intro'>
          By visiting AuctionVistas or taking part in an auction, you agree to follow these terms.
          If you do not agree, please do not use the website.
        </p>

        <section>
          <h2>1. Using AuctionVistas</h2>
          <p>
            You must provide accurate information and use the website only for lawful purposes.
            You are responsible for keeping your account details secure and for activity carried
            out through your account.
          </p>
        </section>

        <section>
          <h2>2. Auctions and bids</h2>
          <p>
            Review an item’s description, condition, auction end time, and bidding requirements
            before placing a bid. A bid is a commitment to purchase if you win. Please place bids
            carefully; submitted bids may not be withdrawn.
          </p>
        </section>

        <section>
          <h2>3. Winning an auction</h2>
          <p>
            If you are the winning bidder, you agree to complete payment and follow the instructions
            provided for that auction. Any applicable charges, delivery arrangements, and payment
            deadlines will be communicated during the purchase process.
          </p>
        </section>

        <section>
          <h2>4. Listing information</h2>
          <p>
            Item details are provided to help you make an informed decision. Please contact us
            through the website if you have questions about an item before bidding.
          </p>
        </section>

        <section>
          <h2>5. Fair use</h2>
          <p>
            Do not interfere with auctions, submit false information, misuse another person’s
            account, or attempt to disrupt the website. We may restrict access when these terms
            are not followed.
          </p>
        </section>

        <section>
          <h2>6. Website availability and changes</h2>
          <p>
            We work to keep AuctionVistas available and current, but access may occasionally be
            interrupted. We may update these terms or website features; continued use after an
            update means you accept the revised terms.
          </p>
        </section>

        <section>
          <h2>7. Contact us</h2>
          <p>
            If you have questions about these terms, please get in touch through our{' '}
            <NavLink to='/contact'>Contact page</NavLink>.
          </p>
        </section>

        <p className='terms-note'>
          These terms are a general guide to using the marketplace and should be reviewed for
          compliance with applicable local laws before publication.
        </p>
      </article>
    </main>
  )
}

export default Terms