import React, { Component } from 'react'
import { addContact } from '../../actions'
import { connect } from 'react-redux'

export class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  }

  clearForms = () => {
    this.setState({ 
      firstName: '', 
      lastName: '',
      email: '',
      phone: ''
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
    this.clearForms()
  }

  render() {

    const { firstName, lastName, phone, email } = this.state

    return(
      <form className='contact-form' onSubmit={(e) => this.handleSubmit(e)}>
        <p className='new-contact-title'>Create New Contact:</p>
        <input 
          type="text"
          value={firstName}
          name='firstName'
          placeholder='First name'
          onChange={this.handleChange}
        />
        <input 
          type="text"
          value={lastName}
          name='lastName'
          placeholder='Last name'
          onChange={this.handleChange}
        />
        <input 
          type="number"
          value={phone}
          name='phone'
          placeholder='Phone'
          onChange={this.handleChange}
        />
        <input 
          type="email"
          value={email}
          name='email'
          placeholder='Email'
          onChange={this.handleChange}
        />
        <button type='submit' className='submit-btn btn'>
          Add Contact
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact))
})

export default connect(null, mapDispatchToProps)(ContactForm)