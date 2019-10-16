import React, { Component } from 'react'
import { addContact } from '../../actions'
import { connect } from 'react-redux'

export class ContactForm extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
    console.log(this.props)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
  }

  render() {

    const { firstName, lastName, phone, email } = this.state

    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <p>Create New Contact</p>
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
          type="text"
          value={email}
          name='email'
          placeholder='Email'
          onChange={this.handleChange}
        />
        <button type='submit'>
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