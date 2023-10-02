import React from 'react'

export default function PostsList({posts,deletePost,setUrl,loading}) {
  return (
    <div>
      <h2 className="text-2xl mt-10">Posts List</h2>

        <div className="flex space-x-4 mx-7">
            <button className="bg-gradient-to-r from-red-400 to-yellow-500 text-white py-2 px-4 rounded" onClick={() => setUrl("http://localhost:3001/posts")}>
                All
            </button>

            <button className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-2 px-4 rounded" onClick={() => setUrl("http://localhost:3001/posts?category=Free")}>
                Free
            </button>

            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded" onClick={() => setUrl("http://localhost:3001/posts?category=Paid")}>
                Paid
            </button>

            <button className="bg-gradient-to-r from-indigo-400 to-blue-500 text-white py-2 px-4 rounded" onClick={() => setUrl("http://localhost:3001/posts?category=Premium")}>
                Premium
            </button>
        </div>

        {loading && <div aria-label="Loading..." role="status" className="flex justify-center items-center py-40">
            <svg className="h-14 w-14 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="24"></line>
                <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                </line>
                <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="24"></line>
                <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                </line>
                <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="24"></line>
                <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                </line>
            </svg>
            <span className="text-3xl font-medium text-gray-500">Loading...</span>
        </div>}

        {
        <div>
            {
            !!posts && posts.map((post) =>(
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
            !posts && <span className='text-red-500 text-md'>There is no data</span>
            }
        </div>
        }
    </div>
  )
}
