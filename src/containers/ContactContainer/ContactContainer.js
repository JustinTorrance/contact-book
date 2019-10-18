import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import { connect } from 'react-redux'
import shortid from 'shortid'
import { fetchContacts } from '../../thunks/fetchContacts'

export class ContactContainer extends Component {

  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {

    let displayContacts = this.props.allContacts.map(contact => {
      return <Contact {...contact} key={shortid.generate()} />
    })

    return (
      <section className="contact-container">
        { displayContacts }
      </section>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts())
})

export const mapStateToProps = (state) => ({
  allContacts: state.contacts
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)
