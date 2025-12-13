import React from 'react'

const SidebarItem = ({icon:Icon,label,isSidebarOpen}) => {

  return (
    <div className='flex mt-2 items-center text-2xl p-2 gap-4 text-emerald-600 hover:bg-emerald-400 rounded-2xl mx-2 hover:text-black'>
        <div>
            <Icon size={32}/>
        </div>
        <div className={`${isSidebarOpen?"block":"hidden"}`}>{label}</div>
    </div>
  )
}

export default SidebarItem