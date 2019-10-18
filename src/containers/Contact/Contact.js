import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { deleteContact } from '../../thunks/deleteContact'
import { fetchContacts } from '../../thunks/fetchContacts'
import { updateContact } from '../../thunks/updateContact'
import PropTypes from 'prop-types'

export class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      phone_num: this.props.phone_num,
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

  handleDelete = async () => {
    await this.props.deleteContact(this.props.id)
    await this.props.fetchContacts()
  }

  saveEdit = async (e) => {
    e.preventDefault()
    const { last_name, first_name, phone_num, email } = this.state
    const id = this.props.id
    await this.props.updateContact({last_name, first_name, phone_num, email, id})
    await this.props.fetchContacts()
  }

  render() {
    const { last_name, first_name, phone_num, email } = this.props
    
    let nonEditingContact = <article className="contact">
                              <ExpansionPanel className='expansion-panel'>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className='expansion-summary'>
                                  <h3>{first_name} {last_name}</h3>  
                                </ExpansionPanelSummary >
                                <ExpansionPanelDetails className='expansion-details'>
                                  <p>Phone: {phone_num}</p>      
                                  <p>Email: {email}</p>
                                  <div className='card-btn-div'>
                                    <button className='delete-btn card-btn btn' onClick={() => this.handleDelete()}> 
                                      Delete
                                    </button>  
                                    <button className='edit-btn card-btn btn' onClick={this.toggleEdit}> 
                                      Edit
                                    </button>  
                                  </div>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                            </article>

    let editingContact =  <form className="contact-edit-form">
                            <div className='edit-div'>
                              <p>First Name: </p>
                              <input 
                                type='text'
                                value={this.state.first_name} 
                                onChange={this.handleChange} 
                                name='first_name'
                              />
                            </div>
                            <div className='edit-div'>
                              <p>Last Name: </p>
                              <input 
                                type='text'
                                value={this.state.last_name}
                                onChange={this.handleChange} 
                                name='last_name'
                              />
                            </div>
                            <div className='edit-div'>
                              <p>Phone: </p>
                              <input 
                                type='number'
                                value={this.state.phone_num} 
                                name='phone_num'
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
                            <button onClick={this.saveEdit} className='save-btn card-btn btn'>
                              Save Changes
                            </button>
                          </form>

    return (
      <div className='contact-card'>
        {!this.state.editMode ? nonEditingContact : editingContact}
      </div>
    );
  }
}

Contact.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string, 
  email: PropTypes.string,
  phone_num: PropTypes.string
}

export const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
  updateContact: (contact) => dispatch(updateContact(contact))
})

export default connect(null, mapDispatchToProps)(Contact)
