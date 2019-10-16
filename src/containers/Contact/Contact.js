import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteContact, editContact } from '../../actions'

export class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      phone: this.props.phone,
      email: this.props.email,
    }
  }

  toggleEdit = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }



  saveEdit = (e) => {
    e.preventDefault()
    const { lastName, firstName, phone, email } = this.state
    const id = this.props.id
    this.props.editContact({lastName, firstName, phone, email, id})
  }

  render() {
    const { id, lastName, firstName, phone, email, deleteContact} = this.props
    
    let nonEditingContact = <article className="contact">
                              <h3>{firstName} {lastName}</h3>  
                              <p>Phone: {phone}</p>      
                              <p>Email: {email}</p>
                              <button className='delete-btn' onClick={() => deleteContact(id)}> 
                                Delete
                              </button>  
                              <button className='edit-btn' onClick={this.toggleEdit}> 
                                Edit
                              </button>  
                            </article>

    let editingContact =  <form className="contact">
                            <div className='edit-div'>
                              <p>First Name: </p>
                              <input 
                                type='text'
                                value={this.state.firstName} 
                                onChange={this.handleChange} 
                                name='firstName'
                              />
                            </div>
                            <div className='edit-div'>
                              <p>Last Name: </p>
                              <input 
                                type='text'
                                value={this.state.lastName}
                                onChange={this.handleChange} 
                                name='lastName'
                              />
                            </div>
                            <div className='edit-div'>
                              <p>Phone: </p>
                              <input 
                                type='number'
                                value={this.state.phone} 
                                name='phone'
                                onChange={this.handleChange} 
                              />
                            </div>
                            <div className='edit-div'>
                              <p>Email: </p>
                              <input 
                                type='email'
                                value={this.state.email} 
                                name='email'
                                onChange={this.handleChange} 
                              />
                            </div>
                            <button onClick={this.saveEdit}>
                              Save changes
                            </button>
                          </form>

    return (
      <div className='contact-card'>
        {!this.state.editMode ? nonEditingContact : editingContact}
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
  editContact: (contact) => dispatch(editContact(contact))
})

export default connect(null, mapDispatchToProps)(Contact)
