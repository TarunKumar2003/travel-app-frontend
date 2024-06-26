import './FinalPrice.css'
export function FinalPrice() {
  return (
    <div className="price-container p-5 shadow-lg m-[120px] w-80">
      <div className="flex justify-between">
        <p>
          <span className="font-bold">Rs.2999 </span>night
        </p>
        <span className="flex">
          <span className="material-icons-outlined">star</span>
          <span>4.4</span>
        </span>
      </div>
      <div className="">
        <p className="flex justify-between">
          <span>Check in</span>
          <span>Check out </span>
        </p>
        <p className="flex justify-between">
          <span>Add dates</span>
          <span>Add dates </span>
        </p>
      </div>

      <div>
        <input
          className="w-full p-8 m-2 mr-2"
          type="text"
          placeholder="Guests"
        />
        <button className="w-full p-5 bg-orange-600"> Reserve</button>
      </div>
    </div>
  )
}
