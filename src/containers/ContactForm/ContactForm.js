import React, { Component } from 'react'

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

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  render() {

    const { firstName, lastName, phone, email } = this.state

    return(
      <form>
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
      </form>
    )
  }
}