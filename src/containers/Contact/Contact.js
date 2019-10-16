import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteContact} from '../../actions'

export class Contact extends Component {

  render() {
    const { id, lastName, firstName, phone, email, deleteContact} = this.props
    return (
      <article className="Contact" id={id}>
        <h3>{firstName} {lastName}</h3>  
        <p>Phone: {phone}</p>      
        <p>Email: {email}</p>
        <button className='delete-btn' onClick={() => deleteContact(id)}> 
          Delete
        </button>  
        <button className='edit-btn'> 
          Edit
        </button>  
      </article>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id))
})

export default connect(null, mapDispatchToProps)(Contact)
