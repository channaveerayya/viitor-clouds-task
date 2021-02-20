import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_DATA,
  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types'

export const loadData = () => async (dispatch) => {
  try {
    if (localStorage.token && localStorage.email && localStorage.password)
      dispatch({
        type: LOAD_DATA,
      })
    else throw Error
  } catch (error) {
    dispatch({ type: AUTH_ERROR })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    if (
      localStorage.getItem('email') === email &&
      localStorage.getItem('password' === password)
    ) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: 'token123',
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password'),
          name: localStorage.getItem('name'),
        },
      })
    } else {
      throw Error
    }
  } catch (error) {
    dispatch(
      setAlert('Login fail check your email password or Sign up ', 'danger')
    )
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT })
}

export const register = ({ name, email, password }) => async (dispatch) => {
  try {
    const res = { name, email, password }
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    })

    dispatch(loadData())
  } catch (error) {
    dispatch(setAlert('Registration Fail', 'danger'))

    dispatch({
      type: REGISTER_FAIL,
    })
  }
}

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = Math.random(100)
  dispatch({ type: SET_ALERT, payload: { msg, alertType, id } })
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 2000)
}
