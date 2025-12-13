import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import SideContent from './Components/SideContent'

const App = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSwitch = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='h-screen flex flex-col '>
      <Navbar dark={dark}/>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar toggleSwitch={toggleSwitch} dark={dark} toggleDark={toggleDark}/>
        <SideContent dark={dark}/>
      </div>
    </div>
  )
}

export default App