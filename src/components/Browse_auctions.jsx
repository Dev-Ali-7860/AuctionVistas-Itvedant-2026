import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Browse_auction from '../pages/Browse_auction'
import browseData from '../data/browse_data'

const Browse_auctions = () => {
    const [searchParams] = useSearchParams()
    const query = (searchParams.get('q') ?? '').trim().toLowerCase()
    const products = query
        ? browseData.filter((product) =>
            `${product.title} ${product.category}`.toLowerCase().includes(query)
        )
        : browseData

    return (
        <div className='browse-auctions-page'>
            <div className='browse-header'>
                <div>
                    <p className='eyebrow'>Curated finds</p>
                    <h2 style={{color : '#805522'}}>{query ? `Search results for "${searchParams.get('q')}"` : 'Browse Auctions'}</h2>
                </div>
                <button type='button' className='filter-btn'>Filter</button>
            </div>

            <div className='browse-grid '>
                {products.length > 0 ? products.map((prod, index) => (
                    <Browse_auction
                        key={`${prod.title}-${index}`}
                        image={prod.image}
                        title={prod.title}
                        category={prod.category}
                        price={prod.price}
                        bid={prod.bid}
                        endtime={prod.endtime}
                    />
                )) : (
                    <p className='browse-empty'>No auctions match your search. Try another product name or category.</p>
                )}
            </div>
        </div>
    )
}

export default Browse_auctions
