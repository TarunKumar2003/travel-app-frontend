import './HotelCard.css'
export function HotelCard() {
  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div>
        <img
          className="img"
          src="https://images.pexels.com/photos/25255070/pexels-photo-25255070/free-photo-of-two-women-walking-down-a-narrow-alleyway-in-a-small-town.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="hotel-card"
        />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location"> Kurukshetra</span>
            <span className="rating d-flex align-center">
              <span class="material-icons-outlined">star</span>
              <span></span>
            </span>
          </div>
          <p className="hotel-name">Zion</p>
          <p className="price-details">
            <span className="price">Rs. 800</span>
            <span>night</span>
          </p>
        </div>
      </div>
      <button className="button btn-wishlist absolute d-flex align-center">
        <span
        // className={`material-icons favorite cursor ${
        //   isHotelInWishlist ? 'fav-selected' : ''
        // }`}
        >
          favorite
        </span>
      </button>
    </div>
  )
}
