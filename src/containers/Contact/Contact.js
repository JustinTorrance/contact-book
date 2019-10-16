import React from 'react';

function Contact(props) {
  console.log(props)
  return (
    <article className="Contact">
      <h3>{props.firstName} {props.lastName}</h3>  
      <p>Phone: {props.phone}</p>      
      <p>Email: {props.email}</p>      
    </article>
  );
}

export default Contact;