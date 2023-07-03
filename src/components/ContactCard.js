import React from 'react'
import user from '../images/prabakaran.jpg'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
  console.log(props);

  const { id, name, email } = props.contact
  return (
    <>
      <div>
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <img src={user} alt='praba' width='50px' />
          <span>{name}</span>
          <span>{email}</span>
        </Link>
        <Link to={'/edit'} state={{ contact: props.contact }} >
          <button>edit</button>
        </Link>
        <button onClick={() => props.clickHandlar(id)}>delete</button>
        <hr />
      </div >
    </>
  )
}

export default ContactCard
