import { useState } from 'react'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import {  faBed, faCamera, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'

import './header.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useNavigate } from 'react-router-dom'

function Header({type}) {

  const [destination, setDestination] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
])

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState(
    {
      adults: 1,
      children: 0,
      room:1,
    }
  )

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev, 
        [name]: operation === 'inc' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const navigate = useNavigate()
  const handleSearch = () => {
    navigate('/hotels', {state: {date, destination, options}})
  }

  return (
    <div className='header'>
      <div className={type === 'list' ? "header-container list=mode" : "header-container"}>

        <div className="header-list">

          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="header-list-item">
            <FontAwesomeIcon icon={faCamera} />
            <span>Attractions</span>
          </div>

          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>

        </div>

        { type !== 'list' &&
          <>
          <h1 className="header-title">
          A lifetime of discount? It's Genius.
          </h1>
        <p className="header-desc">
          Get rewarded for your travels - unlock instant
          savings of 10% or more with a free Ase Booking account.
        </p>
        <button className="header-btn">Sign in / Register</button>

        <div className="header-search">

          <div className="header-search-item">
            <FontAwesomeIcon icon={faBed} className='header-icon'/>
            <input type="text" className='header-search-input' placeholder='Where are you going?' onChange={e => setDestination(e.target.value)} />
          </div>

          <div className="header-search-item" >
            <FontAwesomeIcon icon={faCalendarDays} className='header-icon'/>
            <span onClick={() => setOpenDate(!openDate)} className='header-search-text'>
              {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
            </span>
            {openDate && <DateRange 
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
              minDate={new Date()}
            />}
          </div>

          <div className="header-search-item" >
            <FontAwesomeIcon icon={faPerson} className='header-icon'/>
            <span onClick={()=> setOpenOptions(!openOptions)} className='header-search-text'>
              {`${options.adults} adult • ${options.children} children • ${options.room} rooms`}
            </span>
            {openOptions && <div className="options">

              <div className="option-item">
                <span className="option-text">Adults</span>
                <div className="option-counter">
                <button className="option-counter-btn" onClick={() => handleOption('adults', 'dec')} disabled={options.adults <= 1}>-</button>
                <span className="option-counter-num">{options.adults}</span>
                <button className="option-counter-btn" onClick={() => handleOption('adults', 'inc')}
                >+</button>
                </div>
              </div>

              <div className="option-item">
                <span className="option-text">children</span>
                <div className="option-counter">
                <button className="option-counter-btn" onClick={() => handleOption('children', 'dec')} disabled={options.children < 1}>-</button>
                <span className="option-counter-num">{options.children}</span>
                <button className="option-counter-btn" onClick={() => handleOption('children', 'inc')}>+</button>
                </div>
              </div>

              <div className="option-item">
                <span className="option-text">Rooms</span>
                <div className="option-counter">
                <button className="option-counter-btn" onClick={() => handleOption('room', 'dec')} disabled={options.room <= 1}>-</button>
                <span className="option-counter-num">{options.room}</span>
                <button className="option-counter-btn" onClick={() => handleOption('room', 'inc')}>+</button>
                </div>
              </div>

            </div>}
          </div>

          <div className="header-search-item" >
            <button className="header-btn" onClick={handleSearch}>Search</button>
          </div>

        </div>
        </>}

      </div>
    </div>
  )
}

export default Header