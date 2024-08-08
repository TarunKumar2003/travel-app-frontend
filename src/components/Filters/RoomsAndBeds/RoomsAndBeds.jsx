import { useFilter } from '../../../context/FilterContext'
const number = ['Any', '1', '2', '3', '4', '5+']

export function RoomsAndBeds() {
  const { filterDispatch, noOfBathrooms, noOfBedrooms, noOfBeds } = useFilter()
  const handleBedroomsClick = (number) => {
    filterDispatch({
      type: 'BEDROOMS',
      payload: number,
    })
  }

  const handleBathroomsClick = (number) => {
    filterDispatch({
      type: 'BATHROOMS',
      payload: number,
    })
  }

  const handleBedsClick = (number) => {
    filterDispatch({
      type: 'BEDS',
      payload: number,
    })
  }
  return (
    <div className="filter-container ">
      <div>
        <span className="filter-label text-2xl">Rooms And Beds</span>

        <div className="flex pt-5">
          <div className="flex flex-col gap-2">
            <span className="span-label">Bedrooms</span>
            <span className="span-label">Beds</span>
            <span className="span-label">Bathrooms</span>
          </div>
          <div className="flex flex-col gap-2 ml-4">
            <div className="">
              {number.map((num) => (
                <span
                  className="span-label amenity-count justify-center text-center cursor-pointer on-hover"
                  key={num}
                  onClick={() => handleBedroomsClick(number)}
                >
                  {num}
                </span>
              ))}
            </div>

            <div>
              {number.map((num) => (
                <span
                  className="span-label cursor-pointer  justify-center text-center amenity-count on-hover"
                  key={num}
                  onClick={() => handleBedsClick(number)}
                >
                  {num}
                </span>
              ))}
            </div>

            <div>
              {number.map((num) => (
                <span
                  className="span-label cursor-pointer justify-center text-center amenity-count on-hover"
                  key={number}
                  onClick={() => handleBathroomsClick(number)}
                >
                  {num}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
