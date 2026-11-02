const Browse_auction = ({
    image = '',
    title = 'Auction Item',
    category = 'Uncategorized',
    price = 0,
    bid = '0 bids',
    endtime = 'Ends soon'
}) => {
    return (
        <div className="card" style={{ width: '500px' }}>
            <img className="card-img-top" src={image} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p>{category}</p>
                <h4 className="card-title">Current Bid <br />₹ {price}</h4>
                <p className="card-text">{bid}</p>
                <p>Ends In {endtime}</p>
                <button className="btn btn-success">Place Bid</button>
            </div>
        </div>
    )
}

export default Browse_auction