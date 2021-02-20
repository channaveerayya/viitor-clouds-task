import axios from 'axios'
import { setAlert } from '../redux/actions'
const baseURL = 'https://jsonplaceholder.typicode.com'

export const getApi = async (url) => {
  try {
    const res = await axios.get(baseURL + url)
    return res.data
  } catch (error) {
    setAlert('something went wrong', 'danger')
    return
  }
}

export const deleteApi = async (url) => {
  try {
    const res = await axios.get(baseURL + url)
    return res.data
  } catch (error) {
    setAlert('something went wrong', 'danger')
    return
  }
}
