import React from 'react'

export default function Modal({children,openModal,setOpenModal}) {
  return (
    !!openModal && <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className="bg-white w-1/4 p-6 h-40 rounded-lg shadow-lg">
            <p>{children}</p>
            <button onClick={() => setOpenModal(false)}>Close</button>
        </div>
    </div>
  )
}
