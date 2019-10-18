import React from 'react';
import ContactForm from '../../containers/ContactForm/ContactForm'
import ContactContainer from '../../containers/ContactContainer/ContactContainer'

function App() {
  return (
    <div className="App">
      <h1 className='my-contacts-title'>Contax</h1>
      <p className='description'>A secure place to store your phone's contacts</p>
      <ContactForm />
      <ContactContainer />
    </div>
  );
}

export default App;
