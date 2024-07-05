import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDate } from '../../context/DateContext'
import './DateSelector.css'

export function DateSelector({ placeholder, checkInType }) {
  const { checkInDate, checkOutDate, dateDispatch } = useDate()

  function handleDateChange(date) {
    dateDispatch({
      type: checkInType === 'in' ? 'CHECK_IN' : 'CHECK_OUT',
      payload: date,
    })
  }

  function handleDateFocus() {
    dateDispatch({
      type: 'DATE_FOCUS',
    })
  }
  return (
    <DatePicker
      className="search-dest input"
      selected={checkInType == 'in' ? checkInDate : checkOutDate}
      onChange={(date) => handleDateChange(date)}
      onFocus={handleDateFocus}
      dateFormat={'dd/MM/yyyy'}
      placeholderText="Add Dates"
      minDate={new Date()}
      closeOnScroll={true}
    />
  )
}
