import React from 'react'

export default function PostsList({posts}) {
  return (
    <div>
      <h2>Posts List</h2>
        {
        <div>
            {
            !!posts.length && posts.map((post) =>(
                <div>
                    <span key={post.id}>{post.title}</span>
                </div>
            ))
            }
            {
            !posts.length && <span>There is no data</span>
            }
        </div>
        }
    </div>
  )
}
