import React from 'react'
import LoginSection from '../components/LoginSection'

import Navbar from '../components/Navbar'

function Header() {
  return (
    <header className="bg-veryLightGray w-full h-14 flex justify-center">
      <div className="container flex items-center h-full">
        <img src={'/images/logo.svg'} alt="Logo" />
        <Navbar />
        <LoginSection />
      </div>
    </header>
  )
}

export default Header
