import { useEffect, useState } from 'react'
import { HotelCard, Navbar } from '../../components'
import './Home.css'
import axios from 'axios'

export function Home() {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:3000/api/v1/hotels/all-hotels'
        )
        ///console.log(data.data)
        setHotels(data.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <>
      <Navbar />
      <main className="main d-flex flex-wrap ">
        {hotels &&
          hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </main>
    </>
  )
}
