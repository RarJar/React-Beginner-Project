import React, { useState,useEffect } from 'react'

export default function PostForm({setOpenModal,addPost,updatePost,modalType,editData}) {
  let [title,setTitle] = useState("");
  let [category,setCategory] = useState("Premium");

  useEffect(() => {
    if (modalType === 'edit') {
      setTitle(editData.title);
      setCategory(editData.category);
    }else{
      setTitle('');
      setCategory('Premium');
    }
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();

    // title : title if (key == value) write only one
    let post = {
        id : modalType === 'edit' ? editData.id : Math.floor(Math.random() * 1000),
        title,
        category,
        completed : modalType === 'edit' ? editData.completed : false
    }

    if (modalType === 'edit') {
      updatePost(post);
    }else{
      addPost(post);
      setTitle('');
      setCategory('Premium');
    }
    setOpenModal(false);
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="grid gap-y-4">
        <h1 className='text-lg font-semibold'>{modalType === 'create' ? 'Create' : 'Edit'} {category} Post</h1>
        <div>
            <label className="block text-sm font-bold ml-1 mb-2">Title</label>
            <input className="py-3 px-4 block w-full border-2 border-sky-500 rounded-md text-sm focus:outline-sky-500 shadow-sm" value={title} onChange={ (e) => setTitle(e.target.value) }></input>
            <p className="hidden text-xs text-red-600 mt-2">Please include a valid title so we can get back to you</p>
        </div>
        <div>
            <label className="block text-sm font-bold ml-1 mb-2">Category</label>
            <select className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider" onChange={ (e) => setCategory(e.target.value)} value={category}>
              <option value="Premium">Premium</option>
              <option value="Paid">Paid</option>
              <option value="Free">Free</option>
            </select>
        </div>
        <button type="submit" className="py-3 px-4 justify-center items-center rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-all text-sm">{modalType === 'create' ? 'Create' : 'Update'} Post</button>
        </div>
    </form>
  )
}
