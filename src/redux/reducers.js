import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOAD_DATA,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_ALERT,
  REMOVE_ALERT,
} from './types'

const initState = {
  token: localStorage.getItem('viitorToken'),
  isAuthenticated: localStorage.getItem('viitorToken') ? true : false,
  name: localStorage.getItem('name'),
  password: localStorage.getItem('password'),
  email: localStorage.getItem('email'),
  mockData: [],
  altMsg: null,
  altType: null,
  altId: null,
  loading: true,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('viitorToken', payload.token)
      localStorage.setItem('name', payload.name)
      localStorage.setItem('password', payload.password)
      localStorage.setItem('email', payload.email)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      }

    case LOGIN_FAIL:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        name: null,
        email: null,
        password: null,
        mockData: null,
      }
    case LOGOUT:
      localStorage.removeItem('viitorToken')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        name: null,
        email: null,
        password: null,
        mockData: null,
      }
    case LOAD_DATA:
      return {
        ...state,
        loading: false,
        mockData: payload,
      }
    case SET_ALERT:
      return {
        ...state,
        altMsg: payload.msg,
        altId: payload.id,
        altType: payload.alertType,
      }
    case REMOVE_ALERT:
      return {
        ...state,
        altMsg: null,
        altType: null,
        altId: null,
      }
    default:
      return state
  }
}
