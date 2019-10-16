export const contactsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CONTACT':
      return action.contact
    default:
      return state
  }
}