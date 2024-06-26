import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FinalPrice, HotelDetail, HotelImages, Navbar } from '../../components'
import './SingleHotel.css'

export function SingleHotel() {
  const [singleHotelData, setSingleHotelData] = useState({})
  const { _id } = useParams()

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/hotels/${_id}`
      )
      setSingleHotelData(data.data)
    })()
  }, [_id])

  if (!singleHotelData) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <>
      <Navbar />
      <main className="single-hotel-page">
        <h2 className="text-2xl pb-3 pl-3">
          {singleHotelData?.name} ,{singleHotelData?.state}
        </h2>
        <HotelImages hotelImage={singleHotelData} />

        <div className="hotel-details p-5">
          <HotelDetail hotelDetails={singleHotelData} />
        </div>
      </main>

      <FinalPrice />
    </>
  )
}
