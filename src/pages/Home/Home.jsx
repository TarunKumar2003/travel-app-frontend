import { useEffect, useState } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

import {
  Categories,
  HotelCard,
  Navbar,
  SearchStayWithDate,
  Filter,
} from '../../components'
import './Home.css'
import { useDate, useFilter } from '../../context'
import { getHotelsByPrice, getHotelsByRoomsAndBeds } from '../../utils'
export function Home() {
  const [hasMore, setHasMore] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(16)
  const [testData, setTestData] = useState([])
  const [hotels, setHotels] = useState([])
  const { isSearchModalOpen } = useDate()

  const {
    isFilterModalOpen,
    priceRange,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds,
    propertyType,
    traveloRating,
    isCancelable,
  } = useFilter()
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:3000/api/v1/hotels/all-hotels'
        )
        ///console.log(data.data)
        setTestData(data.data)
        setHotels(data ? data.data.slice(0, 16) : [])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false)
      return
    }

    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 16))
        )
        setCurrentIndex((prev) => prev + 16)
      } else {
        setHotels([])
      }
    }, 1000)
  }

  const filteredHotelsByPrice = getHotelsByPrice(hotels, priceRange)
  const filteredHotelsByBedsAndRooms = getHotelsByRoomsAndBeds(
    filteredHotelsByPrice,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds
  )
  return (
    <>
      <Navbar />
      <Categories />
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            hotels.length > 0 && (
              <h3 className="text-center  mt-8 mb-8">Loading...</h3>
            )
          }
          endMessage={
            <p className="text-center mt-8 mb-8">You have seen it all</p>
          }
        >
          <main className="main d-flex align-center wrap gap-larger">
            {filteredHotelsByBedsAndRooms &&
              filteredHotelsByBedsAndRooms.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))}
          </main>
        </InfiniteScroll>
      ) : (
        <></>
      )}
      {isSearchModalOpen && <SearchStayWithDate />}
      {isFilterModalOpen && <Filter />}
    </>
  )
}
