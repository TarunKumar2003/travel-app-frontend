import { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import './PriceRange.css'

function valuetext(value) {
  return `${value}`
}
export function PriceRange() {
  const [value, setValue] = useState([20, 37])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="mt-8">
      <span className="filter-label pl-0 pt-4 pb-4 text-2xl">Price Range</span>
      <Box sx={{ width: '95%' }}>
        <Slider
          sx={{ color: '#ff6525' }}
          className="price-range mt-5 "
          getAriaLabel={() => ''}
          value={value}
          onChange={handleChange}
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
