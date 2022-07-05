import './searched-items.css'

function SearchedItems() {
  return (
    <div className='searched-item'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/46394071.webp?k=9c31e915d976ef3fd49b5ea60ca9bb3c7657e92c12dcde7c91d2fcb85c121403&o=&s=1" 
            alt="" 
            className="searched-item-img" 
        />

        <div className="searched-item-desc">
            <h1 className="searched-item-title">Tower Street Apartments</h1>
            <span className="searched-item-distance">500m from center</span>
            <span className="searched-item-taxi-opt">Free airport taxi</span>
            <span className="searched-item-subtitle">Studio apartment with Air conditioning</span>
            <span className="searched-item-features">Entire studio • 1 bathroom • Overlooks 30 acres of private gardens with 2 fresh-water pools</span>
            <span className="searched-item-cancel-opt">Free cancellation</span>
            <span className="searched-item-cancel-opt-subtitle">You can cancel later, so lock in this great price today!</span>
        </div>

        <div className="searched-item-details">
            <div className="searched-item-ratings">
                <span>Excellent</span>
                <button>8.9</button>
            </div>

            <div className="searched-item-text">
                <span className="searched-item-price">KES 6,145</span>
                <span className="searched-item-tax-opt">Includes taxes and fees</span>
                <button className="searched-item-check-btn">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchedItems