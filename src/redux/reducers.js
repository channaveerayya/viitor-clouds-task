import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOAD_DATA,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from './types'
import MockData from '../mockData.json'

const initState = {
  token: localStorage.getItem('viitor-token'),
  isAuthenticated: localStorage.getItem('viitor-token') ? true : false,
  name: localStorage.getItem('name'),
  password: localStorage.getItem('password'),
  userEmail: localStorage.getItem('email'),
  mockData: null,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('viitor-token', payload.token)
      localStorage.setItem('name', payload.name)
      localStorage.setItem('password', payload.password)
      localStorage.setItem('email', payload.email)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        MockData: MockData,
      }

    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem('viitor-token')
      localStorage.removeItem('name')
      localStorage.removeItem('password')
      localStorage.removeItem('email')
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        name: null,
        email: null,
        password: null,
        mockData: null,
      }
    case LOAD_DATA:
      return {
        ...state,
        data: MockData,
      }
    default:
      return state
  }
}
