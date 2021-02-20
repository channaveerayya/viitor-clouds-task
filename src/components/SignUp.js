import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../redux/actions'

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    props.signUp(formData)
  }

  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />
  }
  return (
    <Fragment>
      <div className='global-container'>
        <div className='card login-form'>
          <div className='card-body'>
            <h3 className='card-title text-center h1'>
              Sign Up to Viitor Clouds
            </h3>
            <div className='card-text'>
              <form onSubmit={onSubmit}>
                <div className='form-group h4'>
                  <label htmlFor='SignUpName'>Full Name </label>
                  <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={name}
                    className='form-control form-control-md '
                    id='SignUpName'
                    aria-describedby='nameHelp'
                    required
                  />
                </div>
                <div className='form-group h4'>
                  <label htmlFor='SignUpEmail1'>Email address</label>
                  <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={email}
                    className='form-control form-control-md '
                    id='SignUpEmail1'
                    aria-describedby='emailHelp'
                    required
                  />
                </div>
                <div className='form-group h4'>
                  <label htmlFor='SignUpPassword1'>Password</label>
                  <input
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={password}
                    className='form-control form-control-md'
                    id='SignUpPassword1'
                    required
                    autoComplete='on'
                  />
                </div>
                <button
                  style={{ width: '100%' }}
                  type='submit'
                  className='btn btn-primary btn-lg float-end mt-2'
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

SignUp.prototype = {
  isAuthenticated: PropTypes.bool,
  signUp: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
})

export default connect(mapStateToProps, { signUp })(SignUp)
