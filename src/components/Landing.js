import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }
  return (
    <div class='landing '>
      <div class='row landing-inner '>
        <h1>Viitor Cloud</h1>
        <p class='h5'>
          ViitorCloud offers web & mobile app development, AR/VR development, AI
          technology, IT consulting, Blockchain and IoT solutions.
        </p>
        <div className='buttons'>
          <Link to='/login' className='btn btn-primary btn-lg m-2'>
            Login
          </Link>
          <Link to='/signUp' className='btn btn-secondary btn-lg  m-2'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

Landing.prototype = {
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
})

export default connect(mapStateToProps)(Landing)
