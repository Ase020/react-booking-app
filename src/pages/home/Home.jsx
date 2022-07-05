import React from 'react'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomesLoved from '../../components/homesloved/HomesLoved'
import MailList from '../../components/mail-list/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertylist/PropertyList'
import './home.css'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="home-container">
        <Featured/>
        <h1 className="home-title">
          Browse by property type
        </h1>
        <PropertyList/>
        <h1 className="home-title">
          Homes guests love
        </h1>
        <HomesLoved/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home