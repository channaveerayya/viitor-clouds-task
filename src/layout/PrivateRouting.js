import React, { Fragment } from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../redux/actions'
const PrivateRouting = ({
  component: Component,
  isAuthenticated,
  logout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to='/login' />
        ) : (
          <Fragment>
            <nav className='navbar bg-dark p-3'>
              <h1>
                <Link to='/'>
                  <h1 style={{ color: 'white' }}>ViitorCloud</h1>
                </Link>
              </h1>
              <ul>
                <li>
                  <Link to='/dashboard'>
                    <h3>Home</h3>
                  </Link>
                </li>
                <li>
                  <Link to='/todos'>
                    <h3>Todos</h3>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      logout()
                    }}
                    to='/'
                  >
                    <h3>Logout</h3>
                  </Link>
                </li>
              </ul>
            </nav>
            <Component {...props} />
          </Fragment>
        )
      }
    />
  )
}

PrivateRouting.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  loading: state.loading,
})

export default connect(mapStateToProps, { logout })(PrivateRouting)
