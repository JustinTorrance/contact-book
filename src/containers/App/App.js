import React from 'react';
import  { ContactForm } from '../ContactForm/ContactForm'
import ContactContainer from '../../components/ContactContainer/ContactContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='my-contacts-title'>My Contacts</h1>
      <ContactForm />
      <ContactContainer />
    </div>
  );
}

export default App;
