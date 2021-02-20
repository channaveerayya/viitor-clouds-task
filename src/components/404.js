import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div
      className='position-relative'
      style={{ width: '100%', height: '100vh' }}
    >
      <div className='position-absolute top-50 start-50 translate-middle mt-2'>
        <h1 className='display-2'>...ooOPS Page not found</h1>
        <Link to='/'>Go TO Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound
