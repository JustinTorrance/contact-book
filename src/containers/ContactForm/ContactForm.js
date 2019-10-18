import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postContact } from '../../thunks/postContact'
import { fetchContacts} from '../../thunks/fetchContacts'
import shortid from 'shortid'

export class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      phone_num: '',
      email: ''
    }
  }

  clearForms = () => {
    this.setState({ 
      first_name: '', 
      last_name: '',
      email: '',
      phone_num: ''
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.props.postContact({...this.state, id: shortid.generate()})
    await this.props.fetchContacts()
    this.clearForms()
  }

  render() {

    const { first_name, last_name, phone_num, email } = this.state

    return(
      <form className='contact-form' onSubmit={(e) => this.handleSubmit(e)}>
        <p className='new-contact-title'>Create New Contact:</p>
        <input 
          type="text"
          value={first_name}
          name='first_name'
          placeholder='First name'
          onChange={this.handleChange}
        />
        <input 
          type="text"
          value={last_name}
          name='last_name'
          placeholder='Last name'
          onChange={this.handleChange}
        />
        <input 
          type="number"
          value={phone_num}
          name='phone_num'
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
  fetchContacts: () => dispatch(fetchContacts()),
  postContact: (contact) => dispatch(postContact(contact))
})

export default connect(null, mapDispatchToProps)(ContactForm)