import React from 'react'
import Home from './home/Home'
import UserDesktopNavbar from './components/userHeader/UserDesktopNavbar'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './pages/aboutme/AboutMe'
import Portfolio from './pages/portfolio/Portfolio'
import ContactMe from './pages/contactMe/ContactMe'
import SocialMediaLinks from './components/socialMediaLinks/SocialMediaLinks'
import UserFooter from './components/UserFooter'
import MotionGraphics from './pages/portfolio/pages/motionGraphics/MotionGraphics'
import VideoEditing from './pages/portfolio/pages/videoEditing/VideoEditing'
import LogoAnimation from './pages/portfolio/pages/logoAnimation/LogoAnimation'

const MyUsers = () => {
  return (
    <div className=' "w-full bg-black min-h-screen"'>
      <UserDesktopNavbar/>
      <SocialMediaLinks/>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path='about-me' element= {<AboutMe/>} />
        <Route path='portfolio' element= {<Portfolio/>} />
        <Route path='portfolio/motiongraphics' element= {<MotionGraphics/>} />
        <Route path='portfolio/videoediting' element= {<VideoEditing/>} />
        <Route path='portfolio/logoanimation' element= {<LogoAnimation/>} />

        <Route path='contact-me' element= {<ContactMe/>} />
      </Routes>
      <UserFooter/>
    </div>
    
  )
}

export default MyUsers