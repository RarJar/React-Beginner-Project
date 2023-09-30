import React, { useState } from 'react'

export default function PostForm({setOpenModal,addPost}) {
  let [title,setTitle] = useState("");
  let handleInputType = (e) =>{
      setTitle(e.target.value);
  }

  let handleClearForm = () => {
      setTitle('');
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      id : Math.floor(Math.random() * 1000),
      title : title
    }
    addPost(post);
    handleClearForm();
    setOpenModal(false);
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="grid gap-y-4">
        <h1 className='text-lg font-semibold'>Create Post</h1>
        <div>
            <label className="block text-sm font-bold ml-1 mb-2">Title</label>
            <div className="relative">
                <input className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" value={title} onChange={handleInputType}></input>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
        </div>
        <button type="submit" className="py-3 px-4 justify-center items-center rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-all text-sm">Create Post</button>
        <button type="button" className="py-3 px-4 justify-center items-center rounded-md font-semibold bg-red-500 text-white hover:bg-red-600 transition-all text-sm" onClick={handleClearForm}>Clear Form</button>
        </div>
    </form>
  )
}
