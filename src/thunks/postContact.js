export const postContact = (contact) => {
  return async () => {
    const options = {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:3001/api/v1/contacts', options)
      if (!response.ok) {
        throw new Error (response.statusText)
      }
    } catch(error) {
      console.log(error.message)
    }
  }
}