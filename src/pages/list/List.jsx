import { format } from 'date-fns/esm'
import React, {useState,} from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchedItems from '../../components/searched-items/SearchedItems'
import './list.css'


function List() {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="list-container">
        <div className="list-wrapper">

          <div className="list-search">
            <h1 className="list-search-title">Search</h1>

            <div className="list-search-item">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="list-search-item">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)} className='list-search-item-span'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (<DateRange
                onChange={(item) => setDate([item.selection])} 
                minDate={new Date()}
                ranges={date}
              />)}
            </div>

            <div className="list-search-item">
              <label htmlFor="">Options</label>

              <div className="list-search-option">

                <div className="list-search-option-item">
                  <span className="list-search-option-text">Min price <small>per night</small></span>
                  <input type="number" className="list-search-option-input" />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option-text">Max price <small>per night</small></span>
                  <input type="number" className="list-search-option-input" />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option-text">Adults </span>
                  <input type="number" min={1} className="list-search-option-input" placeholder={options.adults} />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option-text">Children </span>
                  <input type="number" min={0} className="list-search-option-input" placeholder={options.children} />
                </div>

                <div className="list-search-option-item">
                  <span className="list-search-option-text">Rooms </span>
                  <input type="number" min={1} className="list-search-option-input" placeholder={options.room} />
                </div>

              </div>
            </div>
            <button className='list-search-btn'>Search</button>
          </div>

          <div className="list-result">
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default List