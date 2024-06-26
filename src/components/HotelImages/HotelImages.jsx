import './HotelImages.css'

export const HotelImages = ({ hotelImage }) => {
  if (!hotelImage) {
    return <div>No Image Available</div>
  }

  const { image, imageArr } = hotelImage

  return (
    <div className="hotel-image-container flex flex-wrap md:flex-nowrap justify-center gap-4">
      <div className="primary-image-container flex-shrink-0 h-full w-full md:w-1/2 lg:w-2/5">
        <img
          className="primary-img w-full h-full object-cover rounded-lg"
          src={image}
          alt="hotel"
        />
      </div>
      <div className="secondary-images grid grid-cols-2 gap-4 w-full md:w-1/2 lg:w-3/5">
        {imageArr &&
          imageArr.map((image, index) => (
            <img
              key={index}
              className="hotel-img w-full h-48 md:h-64 object-cover rounded-md"
              src={image}
              alt={`hotel-${index}`}
            />
          ))}
      </div>
    </div>
  )
}
