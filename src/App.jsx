import { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import { BeakerIcon } from '@heroicons/react/24/solid'
import {Route,Routes} from 'react-router-dom'
import MyUser from "./pages/users/MyUsers"
import './app.css'
import AdminHome from './pages/admin/pages/home/AdminHome';
import { useDispatch, useSelector } from 'react-redux';
import Login from './auth/Login';
import { getUsers, logincheck } from './redux/slices/firstSlice';

function App() {
const {adminIsLogged}=useSelector((state)=>state.omar)
;
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(logincheck())
},[])


  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/*' element={<MyUser />} />
        <Route path='/admin/*' element = {adminIsLogged?<AdminHome/>:<Login/>} />
       </Routes>

    </div>
       
    
  )
}

export default App
