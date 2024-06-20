import './HotelCard.css'
export function HotelCard({ hotel }) {
  // Destructure All of things
  const { image, address, rating, name, price, state } = hotel
  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div>
        <img className="img" src={image} alt="hotel-card" />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">
              {' '}
              {address}, {state}
            </span>
            <span className="rating d-flex align-center">
              <span className="material-icons-outlined">{rating}</span>
              <span></span>
            </span>
          </div>
          <p className="hotel-name">{name}</p>
          <p className="price-details">
            <span className="price">Rs. {price}</span>
            <span>night</span>
          </p>
        </div>
      </div>
      <button className="button btn-wishlist absolute d-flex align-center">
        <span className="material-icons favorite cursor">favorite</span>
      </button>
    </div>
  )
}
