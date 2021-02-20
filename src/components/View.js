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
            <div className='col-3 mt-4' key={post.id}>
              <div className='card' style={{ width: '18rem' }}>
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    Card subtitle
                  </h6>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
