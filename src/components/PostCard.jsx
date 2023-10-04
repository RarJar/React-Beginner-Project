import React from 'react'

export default function PostCard({post,deletePost,editOpenModal}) {
  return (
    <div className={`bg-gray-200 mx-7 my-3 flex justify-between text-black border-l-8 rounded-md p-3 w-[95%] ${post.completed ? 'border-green-500' : 'border-red-500'}`} key={post.id}>
        <div className="text-gray-500 font-thin text-md flex flex-col items-start">
            <span>{post.title}</span>
            <div className="flex flex-wrap mt-2">
                <span className="bg-violet-500 text-white py-1 px-2 rounded-lg text-sm">{post.category}</span>
            </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-red-500 text-md cursor-pointer' onClick={() => deletePost(post.id)}>Delete</h3>
          <h3 className='text-green-500 text-md cursor-pointer' onClick={() => editOpenModal(post)}>Eidt</h3>
        </div>
    </div>
  )
}
