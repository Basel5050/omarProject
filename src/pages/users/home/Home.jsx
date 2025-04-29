import React from 'react'
import UserDesktopNavbar from '../components/userHeader/UserDesktopNavbar'
import HeroSection from './components/HeroSection'
import HeroImage from './components/HeroImage'
import ServicesSection from './components/ServicesSection'
import MyWork from './components/MyWork'
import ContactSection from './components/ContactSection'
import Logos from './components/Logos'

const Home = () => {
  return (
    
    <div className='  bg-black '>
        <HeroSection/>
        <ServicesSection/>
        <Logos/>
        <MyWork/>
        <ContactSection/>
    </div>
  )
}

export default Home