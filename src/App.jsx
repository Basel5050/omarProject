import { useState } from 'react'
import { Button } from "@material-tailwind/react";
import { BeakerIcon } from '@heroicons/react/24/solid'
import {Route,Routes} from 'react-router-dom'
import MyUser from "./pages/users/MyUsers"
import MyAdmin from './pages/admin/MyAdmin'
import './app.css'
function App() {

  return (
    <>
       <Routes>
        <Route path='/*' element={<MyUser />} />
        <Route path='/admin/*' element = {<MyAdmin />} />
       </Routes>
    </>
  )
}

export default App
