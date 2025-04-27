import React from 'react'
import Home from './home/Home'
import UserDesktopNavbar from './components/userHeader/UserDesktopNavbar'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './aboutme/AboutMe'
import Portfolio from './portfolio/Portfolio'
import ContactMe from './contactMe/ContactMe'

const MyUsers = () => {
  return (
    <div className=' w-full bg-blue-gray-900 h-screen'>
      <UserDesktopNavbar/>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path='about-me' element= {<AboutMe/>} />
        <Route path='portoflio' element= {<Portfolio/>} />
        <Route path='contactme' element= {<ContactMe/>} />
      </Routes>

    </div>
    
  )
}

export default MyUsers