import { v4 as uuid } from 'uuid'

const rating = [
  { id: uuid(), type: '1&up' },
  { id: uuid(), type: '2&up' },
  { id: uuid(), type: '3&up' },
  { id: uuid(), type: '4&up' },
  { id: uuid(), type: '5&up' },
]
export function Ratings() {
  return (
    <div className="filter-container mt-5">
      <span className="filter-label mt-5">Rating</span>

      <div>
        {rating.map(({ id, type }) => (
          <span
            className="span-label on-hover amenity-count rating inline-flex text-center justify-center items-center"
            key={id}
          >
            {type}{' '}
          </span>
        ))}
      </div>
    </div>
  )
}
