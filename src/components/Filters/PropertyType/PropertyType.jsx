import { v4 as uuid } from 'uuid'
const arr = [
  { id: uuid(), type: 'House' },
  { id: uuid(), type: 'Guest House' },
  { id: uuid(), type: 'Flat' },
  { id: uuid(), type: 'Hotel' },
]
export function PropertyType() {
  return (
    <div className="filter-container pt-5">
      <span className="filter-label">Property Type</span>

      <div className="flex mt-4">
        {arr.map(({ id, type }) => (
          <span
            className="span-label property-box inline-flex text-center items-center justify-center mr-8 on-hover cursor-pointer"
            key={id}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  )
}
