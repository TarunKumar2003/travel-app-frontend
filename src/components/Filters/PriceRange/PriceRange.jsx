import { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import './PriceRange.css'
import { useFilter } from '../../../context'

const minDifference = 500

function valuetext(value) {
  return `${value}`
}
export function PriceRange() {
  const { priceRange, filterDispatch } = useFilter()

  const handlePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }
    if (activeThumb === 0) {
      filterDispatch({
        type: 'MINIMUM_PRICE',
        payload: {
          newValue,
          priceRange,
          minDifference,
        },
      })
    } else {
      filterDispatch({
        type: 'MAXIMUM_PRICE',
        payload: {
          newValue,
          priceRange,
          minDifference,
        },
      })
    }
  }

  return (
    <div className="mt-8">
      <span className="filter-label pl-0 pt-4 pb-4 text-2xl">Price Range</span>
      <Box sx={{ width: '95%' }}>
        <Slider
          sx={{ color: '#ff6525' }}
          className="price-range mt-5 "
          getAriaLabel={() => ''}
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          min={200}
          max={25000}
          disableSwap
        />
      </Box>
    </div>
  )
}
