export const updateContact = (contact) => {
  return async () => {
    const options = {
      method: "PUT",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch(`http://localhost:3001/api/v1/contacts/${contact.id}`, options)
      if (!response.ok) {
        throw new Error(response.statusText)
      } 
    } catch(error) {
      console.log(error.message)
    }
  }
}
