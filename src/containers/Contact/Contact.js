import React from 'react';

function Contact(props) {
  console.log(props)
  return (
    <article className="Contact">
      <p>{props.firstName}</p>  
      <p>{props.lastName}</p>      
      <p>{props.phone}</p>      
      <p>{props.email}</p>      
    </article>
  );
}

export default Contact;