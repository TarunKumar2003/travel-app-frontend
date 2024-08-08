import { Rating } from '@mui/material'
import './Filter.css'
import { PriceRange } from './PriceRange/PriceRange'
import { PropertyType } from './PropertyType/PropertyType'
import { RoomsAndBeds } from './RoomsAndBeds/RoomsAndBeds'
import { Ratings } from './Ratings/Ratings'
import { FreeCancel } from './FreeCancel/FreeCancel'

import { useFilter } from '../../context'
export function Filter() {
  const { filterDispatch } = useFilter()
  function handleOnClose() {
    filterDispatch({
      type: 'SHOW_FILTER_MODAL',
    })
  }
  return (
    <div className="filter-modal">
      <div className="filter-page shadow-sm">
        <div className="flex justify-between">
          <span className="filter-label text-2xl"> Filter</span>
          <button
            className="btn-close flex items-center justify-center"
            onClick={handleOnClose}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Ratings />
        <FreeCancel />
        <div className="flex justify-between items-center mt-5">
          <button className=" button cursor btn-link-primary">Clear All</button>
          <button className="button cursor btn-primary btn-apply p-2 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
