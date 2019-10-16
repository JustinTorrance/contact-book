import shortid from 'shortid'

export const contactsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CONTACT':
      return [...state, {...action.contact, id: shortid.generate()}]
    case 'DELETE_CONTACT':
      return state.filter(contact => (contact.id !== action.id))
    case 'EDIT_CONTACT':
      let newState = state.filter(contact => (contact.id !== action.contact.id))
      return [...newState, action.contact]
    default:
      return state
  }
}