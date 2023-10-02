import React from 'react'

export default function PostsList({posts,deletePost}) {
  return (
    <div>
      <h2 className="text-2xl mt-10">Posts List</h2>
        {
        <div>
            {
            !!posts.length && posts.map((post) =>(
                <div className="bg-gray-200 mx-7 my-3 flex justify-between text-black border-l-8 border-green-500 rounded-md p-3 w-[95%]" key={post.id}>
                    <div className="text-gray-500 font-thin text-md flex flex-col items-start">
                        <span>{post.title}</span>
                        <div className="flex flex-wrap mt-2">
                            <span className="bg-violet-500 text-white py-1 px-2 rounded-lg text-sm">{post.category}</span>
                        </div>
                    </div>
                    <h3 className='text-red-500 text-md cursor-pointer' onClick={() => deletePost(post.id)}>Delete</h3>
                </div>
            ))
            }
            {
            !posts.length && <span className='text-red-500 text-md'>There is no data</span>
            }
        </div>
        }
    </div>
  )
}
