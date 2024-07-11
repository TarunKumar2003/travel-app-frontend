import './FreeCancel.css'
export function FreeCancel() {
  return (
    <div className="flex items-center gap-large mt-5">
      <span className="filter-label"> Free Cancellation</span>
      <label className="slide">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
