import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import SideContent from './Components/SideContent'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <SideContent/>
      </div>
    </div>
  )
}

export default App