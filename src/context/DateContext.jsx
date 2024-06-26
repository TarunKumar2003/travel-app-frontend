import { Children } from 'react'
import { createContext, useContext, useReducer } from 'react'

const initialState = {
  destination: '',
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  isSearchResultOpen: false,
}

const DateContext = createContext(initialState)

const DateProvider = ({ Children }) => {
  const [
    {
      destination,
      guests,
      checkInDate,
      checkOutDate,
      isSearchModalOpen,
      isSearchResultOpen,
    },
    dateDispatch,
  ] = useReducer(dateReducer, initialState)
}

;<DateContext.Provider
  value={{
    destination,
    guests,
    checkInDate,
    checkOutDate,
    isSearchModalOpen,
    isSearchResultOpen,
    dateDispatch,
  }}
>
  {Children}
</DateContext.Provider>

const useDate = () => useContext(DateContext)

export { useDate, DateProvider }
