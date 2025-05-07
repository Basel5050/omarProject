import React from 'react'
import AdminNavBar from '../../components/NavBar'
import MangeData from './components/MangeData'
import { Route, Routes } from 'react-router-dom'
import ControlVideo from '../controlVideo/ControlVideo'
import ControlMotion from '../controlMotion/ControlMotion'
import ControlLogo from '../controlLogoAnimation/ControlLogo'
import LastWork from '../lastWork/LastWork'

const AdminHome = () => {
  return (
    <div>
<AdminNavBar/>
<Routes>
<Route index element = {<MangeData/>} />
<Route path='control-video' element= {<ControlVideo/>} />
<Route path='control-motion' element= {<ControlMotion/>} />
<Route path='control-logo' element= {<ControlLogo/>} />
<Route path='control-last' element= {<LastWork/>} />

</Routes>

    </div>
  )
}

export default AdminHome