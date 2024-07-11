import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCategory } from '../../context'

import './Categories.css'

export const Categories = () => {
  const [categories, setCategories] = useState([])
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0)
  const { hotelCategory, setHotelCategory } = useCategory()

  const handleShowMoreRightClick = () => {
    setNumberOfCategoryToShow((prev) => prev + 10)
  }

  const handleFilterClick = () => {
    filterDispatch({
      type: 'SHOW_FILTER_MODAL',
    })
  }

  const handleShowMoreLeftClick = () => {
    setNumberOfCategoryToShow((prev) => prev - 10)
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:3000/api/v1/hotels/all-category'
        )
        const hotelCategoryData = data.data
        const categoriesToShow = hotelCategoryData.slice(
          numberOfCategoryToShow + 10 > hotelCategoryData.length
            ? hotelCategoryData.length - 10
            : numberOfCategoryToShow,
          numberOfCategoryToShow > hotelCategoryData.length
            ? hotelCategoryData.length
            : numberOfCategoryToShow + 10
        )
        setCategories(categoriesToShow)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [numberOfCategoryToShow])

  const handleCategoryClick = (category) => {
    setHotelCategory(category)
  }

  return (
    <div className="categories">
      <section className="d-flex align-center gap-large cursor-pointer">
        {numberOfCategoryToShow >= 10 && (
          <button
            className="button btn-category btn-left fixed cursor-pointer"
            onClick={handleShowMoreLeftClick}
          >
            <span className="material-icons-outlined">chevron_left</span>
          </button>
        )}
        {categories &&
          categories.map(({ _id, category }) => (
            <span
              className={`${category === hotelCategory ? 'border-bottom' : ''}`}
              key={_id}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          ))}
        {numberOfCategoryToShow - 10 < categories.length && (
          <button
            className="button btn-category btn-right fixed cursor-pointer"
            onClick={handleShowMoreRightClick}
          >
            <span className="material-icons-outlined">chevron_right</span>
          </button>
        )}
      </section>
      <button
        className="button btn-filter flex items-center gap-small cursor-pointer"
        onClick={handleFilterClick}
      >
        <span className="material-icons-outlined">filter_alt</span>
        <span>Filter</span>
      </button>
    </div>
  )
}
