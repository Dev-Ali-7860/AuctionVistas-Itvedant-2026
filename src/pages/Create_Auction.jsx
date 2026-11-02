import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import heroImage from '../assets/hero-img.png'

const Create_Auction = () => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    if (!previewOpen) return
    const closeOnEscape = event => event.key === 'Escape' && setPreviewOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [previewOpen])

  function formSubmit() {
    alert('Auction created successfully! Your listing is ready for approval.')
    reset()
    setPreviewOpen(false)
  }

  return (
    <main className="create-auction">
      <header className="auction-heading">
        <span>SELL WITH CONFIDENCE</span>
        <h1>Create your auction</h1>
        <p>Share something special with bidders who know its value.</p>
      </header>

      <form className="auction-form" onSubmit={handleSubmit(formSubmit)} noValidate>
        <section className="auction-section">
          <h2><span>01</span> Item details</h2>
          <label htmlFor="auction-title">Auction title</label>
          <input id="auction-title" placeholder="e.g. Vintage Rolex Watch" {...register('title', { required: 'Auction title is required.' })} />
          {errors.title && <p className="auction-error">{errors.title.message}</p>}

          <label htmlFor="auction-category">Category</label>
          <select id="auction-category" defaultValue="" {...register('category', { required: 'Please select a category.' })}>
            <option value="" disabled>Select a category</option>
            {['Watches', 'Jewelry', 'Art', 'Sneakers', 'Electronics', 'Furniture', 'Vehicles', 'Collectibles', 'Other'].map(category => <option key={category}>{category}</option>)}
          </select>
          {errors.category && <p className="auction-error">{errors.category.message}</p>}

          <label htmlFor="auction-description">Description</label>
          <textarea id="auction-description" rows="4" placeholder="Tell bidders what makes your item special..." {...register('description', {
            required: 'Please enter a description.',
            maxLength: { value: 500, message: 'Description must not exceed 500 characters.' }
          })} />
          {errors.description && <p className="auction-error">{errors.description.message}</p>}
        </section>

        <section className="auction-section">
          <h2><span>02</span> Item image</h2>
          <label htmlFor="auction-image">Upload an image <small>JPEG, PNG or WebP · Max 5 MB</small></label>
          <input id="auction-image" type="file" accept="image/jpeg,image/png,image/webp" {...register('image', {
            required: 'Please upload an image.',
            validate: files => !files[0] || files[0].size <= 5 * 1024 * 1024 || 'Image size must not exceed 5 MB.'
          })} />
          {errors.image && <p className="auction-error">{errors.image.message}</p>}
        </section>

        <section className="auction-section">
          <h2><span>03</span> Pricing & schedule</h2>
          <div className="auction-fields">
            <div>
              <label htmlFor="auction-price">Starting price (₹)</label>
              <input id="auction-price" type="number" min="1" placeholder="e.g. 100000" {...register('start_price', {
                valueAsNumber: true,
                required: 'Starting price is required.',
                min: { value: 1, message: 'Starting price must be at least ₹1.' },
                validate: value => Number.isFinite(value) || 'Please enter a valid price.'
              })} />
              {errors.start_price && <p className="auction-error">{errors.start_price.message}</p>}
            </div>
            <div>
              <label htmlFor="auction-increment">Minimum bid increment (₹)</label>
              <input id="auction-increment" type="number" min="5000" placeholder="e.g. 5000" {...register('increment', {
                valueAsNumber: true,
                required: 'Minimum bid increment is required.',
                min: { value: 5000, message: 'Minimum increment must be at least ₹5000.' },
                validate: value => Number.isFinite(value) || 'Please enter a valid increment.'
              })} />
              {errors.increment && <p className="auction-error">{errors.increment.message}</p>}
            </div>
            <div>
              <label htmlFor="auction-start">Start date</label>
              <input id="auction-start" type="date" {...register('startdate', { required: 'Please select the auction start date.' })} />
              {errors.startdate && <p className="auction-error">{errors.startdate.message}</p>}
            </div>
            <div>
              <label htmlFor="auction-end">End date</label>
              <input id="auction-end" type="date" {...register('enddate', {
                required: 'Please select the auction end date.',
                validate: (value, values) => !values.startdate || value > values.startdate || 'End date must be after the start date.'
              })} />
              {errors.enddate && <p className="auction-error">{errors.enddate.message}</p>}
            </div>
          </div>
        </section>

        <div className="auction-actions">
          <button type="button" className="auction-button auction-button-secondary" onClick={() => setPreviewOpen(true)}>Preview auction</button>
          <button type="submit" className="auction-button">Submit for approval</button>
        </div>
      </form>

      {previewOpen && (
        <div className="auction-modal-backdrop" onClick={event => event.target === event.currentTarget && setPreviewOpen(false)}>
          <section className="auction-modal" role="dialog" aria-modal="true" aria-labelledby="auction-preview-title">
            <header>
              <h2 id="auction-preview-title">AuctionVistas</h2>
              <button type="button" className="auction-modal-close" aria-label="Close preview" onClick={() => setPreviewOpen(false)}>×</button>
            </header>
            <div className="auction-modal-content">
              <div className="auction-preview-image">
                <img src={heroImage} alt="Luxury watch, framed artwork and sneaker displayed for auction" />
              </div>
              <div className="auction-preview-details">
                <h3>Ready to Create Your Auction?</h3>
                <p>Review your submission before sending it for approval.</p>
                <p>Your auction will be reviewed before publication.</p>
              </div>
            </div>
            <footer>
              <button type="button" className="auction-button auction-button-secondary">Continue editing</button>
              <button type="button" className="auction-button" data-bs-dismiss="modal">Submit for approval</button>
            </footer>
          </section>
        </div>
      )}
    </main>
  )
}

export default Create_Auction
