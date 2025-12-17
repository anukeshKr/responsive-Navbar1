import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import SideContent from './Components/SideContent'
import Modal from './Components/Modal/Modal'
import Signup from './Components/SignUp/Signup'

const App = () => {
  const[isLogin,setIsLogin] = useState(false)
  
  return (
    <div className='h-screen flex flex-col '>
      <Navbar setIsLogin={setIsLogin}/>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <SideContent />
      </div>
      <Modal isOpen={isLogin} onClose={() => setIsLogin(false)}>
        <Signup/>
      </Modal>  
    </div>
  )
}

export default App