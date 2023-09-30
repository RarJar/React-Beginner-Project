import React from 'react'
import ReactDom from "react-dom";
export default function Modal({children,openModal,setOpenModal,create}) {
  return (
    ReactDom.createPortal(
      !!openModal && <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className="bg-slate-100 w-1/4 p-6 rounded-md shadow-md relative" style={{
          border : '2px solid',
          borderColor : create ? 'blue' : 'red'
        }}>
              <i className="fa-solid fa-xmark text-red-500 text-xl absolute right-8" onClick={() => setOpenModal(false)}></i>
              <div>{children}</div>
          </div>
      </div>,
      document.getElementById('modal')
    )
  )
}
