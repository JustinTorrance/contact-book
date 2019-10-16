import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import { connect } from 'react-redux'
import shortid from 'shortid'

export class ContactContainer extends Component {

  render() {


    let displayContacts = this.props.allContacts.map(contact => {
      // console.log('container', contact)
      return <Contact {...contact} key={shortid.generate()} />
    })

    return (
      <section className="ContactContainer">
        <p>Containerrrr</p>
        { displayContacts }
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  allContacts: state.contacts
})

export default connect(mapStateToProps)(ContactContainer)
