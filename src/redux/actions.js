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
import { getApi } from '../Api'
export const loadData = () => async (dispatch) => {
  try {
    if (localStorage.viitorToken) {
      getApi('/users').then((res) => {
        dispatch({
          type: LOAD_DATA,
          payload: res,
        })
      })
    } else throw Error
  } catch (error) {
    dispatch({ type: AUTH_ERROR })
  }
}

export const login = (email, password) => async (dispatch) => {
  let lEmail = await localStorage.getItem('email')
  let lPassword = await localStorage.getItem('password')
  let lName = await localStorage.getItem('name')
  try {
    if (lEmail === email && lPassword === password) {
      // call login credentials
      const res = await getApi('')

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: 'token123',
          email: lEmail,
          password: lPassword,
          name: lName,
        },
      })
      dispatch(loadData())
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

export const signUp = (formData) => async (dispatch) => {
  let lEmail = await localStorage.getItem('email')
  try {
    if (lEmail !== formData.email) {
      // call login credentials
      const res = await getApi('')
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { ...formData, token: 'token123' },
      })
      dispatch(loadData())
    } else {
      throw Error
    }
  } catch (error) {
    dispatch(setAlert('Registration Fail user existed', 'danger'))

    dispatch({
      type: REGISTER_FAIL,
    })
  }
}

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = Math.random(100)
  dispatch({ type: SET_ALERT, payload: { msg, alertType, id } })
  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000)
}
