import './Navbar.css'
import { useDate } from '../../context'
export function Navbar() {
  const { dateDispatch } = useDate()
  function handleSearchClick() {
    dateDispatch({
      type: 'OPEN_SEARCH_MODAL',
    })
  }
  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <a className="link" href="/">
          Host Haven
        </a>
      </h1>
      <div
        className="form-container d-flex cursor-pointer align-center shadow"
        onClick={handleSearchClick}
      >
        <span className="form-option">Any Where</span>
        <span className="border-right-1px"></span>
        <span className="form-option">Any Week</span>
        <span className="border-right-1px"></span>
        <span className="form-option">Add Guests</span>
        <span className="search material-icons-outlined">search</span>
      </div>
      <nav className="d-flex align-center gap-large">
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-icons-outlined profile-option menu p-2">
            menu
          </span>
          <span className="material-icons-outlined profile-option person p-2 ">
            person_2
          </span>
        </div>
      </nav>
    </header>
  )
}
