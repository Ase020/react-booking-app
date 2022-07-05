import './hotel.css'
import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mail-list/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleArrowLeft, faCircleArrowRight, faCircleXmark} from '@fortawesome/free-solid-svg-icons'


function Hotel() {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const hotelImages = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/200788327.jpg?k=ecf39c29a4794d316d21336b9a7b54159728039452712d54ca5134171dcfdb18&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/203997711.jpg?k=09abfd858b1aee7ce6fd6fb25a0e744c4faab18727077741e04d1dc5f3ffe09b&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/80944400.jpg?k=8a43907e39ae1ebe0e43646caf469fa9b710d8e9a4ecf01613cf844ca5ea370b&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/203997636.jpg?k=657ce606001e66ea28b9850fbf0c2101c9b7da4e535a64a3532efe9fe1cd2b60&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/237215000.jpg?k=0e607de4e023e13c86c993b9c3984d27d5130debb3ddf27333f0840c94c4b3b0&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/237459383.jpg?k=63d086847e7986b9aab3c52a95bd447db039ae621f802c8e8f74525d12bc4d64&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/237215007.jpg?k=50f7db49748c115b4644bc120dbd208e227ccb5557ca90b677011f739efc62fb&o=&hp=1"
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotel-container">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('l')}/>
          <div className="sliderWrapper">
            <img src={hotelImages[slideNumber].src} alt="" className="slider-img" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('r')}/>
        </div>}
        <div className="hotel-wrapper">
          <button className="book-now">Reserve or Book now!</button>
          <h1 className="hotel-title">Diani Reef Beach Resort & Spa</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Diani Beach Road, 80400 Diani Beach, Kenya</span>
          </div>
          <span className="hotel-distance">Excellent location - 500 meter to center</span>
          <span className="hotel-price-highlight">Book a stay over KES 60,125 and get a free airport taxi</span>
          <div className="hotel-images">
            {hotelImages.map((image, i) => 
            (<div className="hotel-image-wrapper">
              <img onClick={() => handleOpen(i)} src={image.src} alt="" className="hotel-image" />
            </div>
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotel-details-text">
              <h1 className="hotel-title">Experience World-class Service at Diani Reef Beach Resort & Spa</h1>
              <p className="hotel-desc">
              Set on the white sands of Diani Beach, this 5-star resort in Ukunda overlooks 30 acres of private
               gardens with 2 fresh-water pools. Wellness facilities include a steam bath, aromatherapy and facial
                treatments. <br /> <br />

              Overlooking the Indian Ocean, all Diani rooms feature private balconies and satellite TV. Each has a
               work desk and a spacious bathroom with a bathtub. Tea and coffee facilities are provided. <br /> <br />

              Guests can enjoy a rich breakfast buffet at the Coral Rock Cafe or try Oriental fusion cuisine at Sake.
               Seafood and grilled dishes can be savored at Fins. For drinks, there are 3 bars and evening entertainment
                is offered on selected evenings. <br /> <br />

              Activities on site include tennis, table tennis and squash. Wind surfing, snorkeling and water sports
               facilities can be arranged. <br /> <br />

              Diani Reef Beach Resort & Spa is located 45 minutes’ drive from the center of Mombasa.
              </p>
            </div>

            <div className="hotel-details-price">
              <h1>Perfect for a 9 night stay</h1>
              <span>Located along the sandy beaches of Diani, this property has an excellent location score of 9.4</span>
              <h2><b>KES 150,000</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel