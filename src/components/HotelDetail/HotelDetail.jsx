import './HotelDetail.css'

export const HotelDetail = ({ hotelDetails }) => {
  const {
    hostName,
    hostJoinedOn,
    numberOfBathrooms,
    numberOfBeds,
    numberOfguest,
    numberOfBedrooms,
  } = hotelDetails

  return (
    <div className="hotel-details-container p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="host-details mb-6">
        <p className="host-name text-xl font-semibold">
          Hosted by {hostName}, Joined on {hostJoinedOn}
        </p>
        <div className="hotel-room-details text-lg text-gray-700 mt-2">
          {numberOfguest} guests · {numberOfBedrooms} bedrooms · {numberOfBeds}{' '}
          beds · {numberOfBathrooms} bathrooms
        </div>
      </div>
      <div className="key-features mb-6">
        <div className="feature mb-4">
          <p className="text-lg font-medium flex items-center">
            <span className="material-icons-outlined mr-2">apps</span> Dedicated
            Workspace
          </p>
          <span className="text-gray-600">
            A common area with wifi that is well suited for working
          </span>
        </div>
        <div className="feature mb-4">
          <p className="text-lg font-medium flex items-center">
            <span className="material-icons-outlined mr-2">location_on</span>{' '}
            Great Location
          </p>
          <span className="text-gray-600">
            80% of recent guests gave the location a 5-star rating
          </span>
        </div>
        <p className="text-lg font-medium flex items-center">
          <span className="material-icons-outlined mr-2">cancel</span> Free
          cancellation before 7 days of booking
        </p>
      </div>
      <div className="amenities-container">
        <p className="text-xl font-semibold mb-4">What this place offers</p>
        <div className="amenities-grid grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="flex items-center mb-2">
              <span className="material-icons-outlined mr-2">kitchen</span>{' '}
              Kitchen
            </span>
            <span className="flex items-center mb-2">
              <span className="material-icons-outlined mr-2">
                local_parking
              </span>{' '}
              Free parking on premises
            </span>
            <span className="flex items-center mb-2">
              <span className="material-icons-outlined mr-2">work</span>{' '}
              Dedicated Workspace
            </span>
          </div>
          <div>
            <span className="flex items-center mb-2">
              <span className="material-icons-outlined mr-2">wifi</span> Wifi
            </span>
            <span className="flex items-center mb-2">
              <span className="material-icons-outlined mr-2">
                local_laundry_service
              </span>{' '}
              Washing Machine
            </span>
            <span className="flex items-center mb-2">
              <span className="material-icons-outlined mr-2">balcony</span>{' '}
              Patio or Balcony
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
