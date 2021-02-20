import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../redux/actions'

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    props.login(email, password)
  }

  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />
  }
  return (
    <Fragment>
      <div className='global-container'>
        <div className='card login-form'>
          <Link to='/' className='mt-2'>
            &#8592; Go back{' '}
          </Link>
          <div className='card-body'>
            <h3 className='card-title text-center h1'>
              Log in to Viitor Clouds
            </h3>
            <div className='card-text'>
              <form onSubmit={onSubmit}>
                <div className='form-group h4'>
                  <label htmlFor='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={email}
                    className='form-control form-control-md '
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    required
                  />
                </div>
                <div className='form-group h4'>
                  <label htmlFor='exampleInputPassword1'>Password</label>
                  <input
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={password}
                    className='form-control form-control-md'
                    id='exampleInputPassword1'
                    required
                    autoComplete='on'
                  />
                </div>
                <button
                  style={{ width: '100%' }}
                  type='submit'
                  className='btn btn-primary btn-lg float-end mt-2'
                >
                  Login
                </button>
                <div className='sign-up  float-end m-3'>
                  <p>
                    Don't have an account? <Link to='/signUp'>Create One</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
