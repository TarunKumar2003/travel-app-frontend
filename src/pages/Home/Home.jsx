import { HotelCard, Navbar } from '../../components'
import './Home.css'
export function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <HotelCard />
      </main>
    </>
  )
}
