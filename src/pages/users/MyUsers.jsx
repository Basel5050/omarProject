import React from 'react'
import Home from './home/Home'
import UserDesktopNavbar from './components/userHeader/UserDesktopNavbar'
import { Route, Routes } from 'react-router-dom'

const MyUsers = () => {
  return (
    <div className=' w-full bg-blue-gray-900 '>
      <UserDesktopNavbar/>
      <Routes>
        <Route index element = {<Home/>} />
      </Routes>

    </div>
    
  )
}

export default MyUsers