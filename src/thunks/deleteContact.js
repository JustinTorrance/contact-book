export const deleteContact = (id) => {
  return async () => {
    const options = {
      method: "DELETE",
    }
    try {
      const response = await fetch(`http://localhost:3001/api/v1/contacts/${id}`, options)
      if (!response.ok) {
        throw new Error (response.statusText)
      }
    } catch(error) {
      console.log(error.message)  
    }
  } 
}