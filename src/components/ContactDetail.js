import React from 'react'
import user from '../images/prabakaran.jpg'

import { Link, useLocation } from 'react-router-dom';

const ContactDetail = () => {
  const location = useLocation();
  const state = location.state
  const { name, email } = state.contact
  return (
    <div>
      <img src={user} alt='praba' width={'50px'} />
      <h1>{name}</h1>
      <h3>{email}</h3>
      <Link to='/'>
        <button>Back to Contact List</button>
      </Link>
    </div>
  )
}

export default ContactDetail
