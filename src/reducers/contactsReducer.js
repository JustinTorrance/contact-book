export const contactsReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_CONTACTS':
      return action.contacts
    default:
      return state
  }
}