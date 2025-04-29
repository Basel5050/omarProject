import { useState } from 'react'
import { Button } from "@material-tailwind/react";
import { BeakerIcon } from '@heroicons/react/24/solid'
import {Route,Routes} from 'react-router-dom'
import MyUser from "./pages/users/MyUsers"
import MyAdmin from './pages/admin/MyAdmin'
import './app.css'
function App() {

  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/*' element={<MyUser />} />
        <Route path='/admin/*' element = {<MyAdmin />} />
       </Routes>

    </div>
       
    
  )
}

export default App
