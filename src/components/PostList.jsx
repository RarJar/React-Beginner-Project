import React from 'react'

export default function PostsList({posts,deletePost}) {
  return (
    <div>
      <h2 className="text-2xl mt-10">Posts List</h2>
        {
        <div>
            {
            !!posts.length && posts.map((post) =>(
                <div class="bg-gray-200 mx-5 my-3 flex justify-between text-black border-l-8 border-green-500 rounded-md p-3 w-[95%]">
                    <div class="text-gray-500 font-thin text-md">
                        <span key={post.id}>{post.title}</span>
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
