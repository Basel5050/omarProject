import React from 'react'
import Home from './home/Home'
import UserDesktopNavbar from './components/userHeader/UserDesktopNavbar'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './aboutme/AboutMe'
import Portfolio from './portfolio/Portfolio'
import ContactMe from './contactMe/ContactMe'
import SocialMediaLinks from './components/socialMediaLinks/SocialMediaLinks'
import UserFooter from './components/UserFooter'

const MyUsers = () => {
  return (
    <div className=' "w-full bg-black min-h-screen"'>
      <UserDesktopNavbar/>
      <SocialMediaLinks/>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path='about-me' element= {<AboutMe/>} />
        <Route path='portoflio' element= {<Portfolio/>} />
        <Route path='contactme' element= {<ContactMe/>} />
      </Routes>
      <UserFooter/>
    </div>
    
  )
}

export default MyUsers