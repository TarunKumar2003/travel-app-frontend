import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Categories } from './components'
import { Home, SingleHotel } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:state/:_id/reserve"
        element={<SingleHotel />}
      />
    </Routes>
  )
}

export default App
