import React from 'react'

const Modal = ({isOpen,onClose,children,width="lg:w-100"}) => {

  if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/50' />
      <div className={`relative z-10 ${width} rounded-xl bg-white p-6 shadow-xl`}>
        <div className='flex justify-end font-medium cursor-pointer'>
          <button onClick={onClose} className='cursor-pointer hover:bg-emerald-600'>X</button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal