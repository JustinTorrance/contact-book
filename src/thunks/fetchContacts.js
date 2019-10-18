import { storeContacts } from '../actions'

export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/contacts')
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const contacts = await response.json()
      dispatch(storeContacts(contacts))
    } catch(error) {
      console.log(error.message)
    }
  }
}