import React, { createContext, useContext, useReducer } from 'react'
import { DateReducer } from '../reducers'

const initialState = {
  destination: '',
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  isSearchResultOpen: false,
}

const DateContext = createContext(initialState)

const DateProvider = ({ children }) => {
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
  ] = useReducer(DateReducer, initialState)

  return (
    <DateContext.Provider
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
      {children}
    </DateContext.Provider>
  )
}

const useDate = () => useContext(DateContext)

export { useDate, DateProvider }
