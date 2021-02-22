import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getApi } from '../Api'

function View({ match: { params } }) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getApi(`/posts?userId=${params.id}`).then((res) => setPosts(res))
  }, [])

  return (
    <div className='container mt-4'>
      <Link to='/dashboard'> &#8592; Go to Dashboard</Link>
      <div className='row'>
        {params.id && posts && posts.length ? (
          posts.map((post) => (
            <div className='col-sm-1 col-md-3 mt-2' key={post.id}>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>
                    {post.id}. {post.title}
                  </h5>
                  <p className='card-text text-muted'>{post.body}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No Posts Yet wait a while</h1>
        )}
      </div>
    </div>
  )
}

export default View
