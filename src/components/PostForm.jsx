import React, { useState } from 'react'

export default function PostForm({setOpenModal,addPost}) {
  let [title,setTitle] = useState("");
  let [category,setCategory] = useState("Premium");

  let handleInputType = (e) =>{
      setTitle(e.target.value);
  }

  let handleSelectCategory = (e) => {
      setCategory(e.target.value);
  }

  let handleClearForm = () => {
      setTitle('');
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      id : Math.floor(Math.random() * 1000),
      title : title,
      category : category
    }
    addPost(post);
    handleClearForm();
    setOpenModal(false);
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="grid gap-y-4">
        <h1 className='text-lg font-semibold'>Create {category} Post</h1>
        <div>
            <label className="block text-sm font-bold ml-1 mb-2">Title</label>
            <input className="py-3 px-4 block w-full border-2 border-sky-500 rounded-md text-sm focus:outline-sky-500 shadow-sm" value={title} onChange={handleInputType}></input>
            <p className="hidden text-xs text-red-600 mt-2">Please include a valid title so we can get back to you</p>
        </div>
        <div>
            <label className="block text-sm font-bold ml-1 mb-2">Category</label>
            <select className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider" onChange={handleSelectCategory} value={category}>
              <option value="Premium">Premium</option>
              <option value="Paid">Paid</option>
              <option value="Free">Free</option>
            </select>
        </div>
        <button type="submit" className="py-3 px-4 justify-center items-center rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-all text-sm">Create Post</button>
        <button type="button" className="py-3 px-4 justify-center items-center rounded-md font-semibold bg-red-500 text-white hover:bg-red-600 transition-all text-sm" onClick={handleClearForm}>Clear Form</button>
        </div>
    </form>
  )
}
