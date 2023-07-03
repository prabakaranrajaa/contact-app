import React, { useRef } from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom'

const ContactList = (props) => {
  //console.log(props);

  // const contacts =
  //   [{
  //     id: '1',
  //     name: 'praba',
  //     email: "praba@gmail.com"

  //   },]
  const inputEl = useRef('')
  const deleteContactHandler = (id) => {
    props.getContactId(id)

  }
  const renderContactList = props.contacts.map((contact) => {
    return (

      <ContactCard contact={contact}
        clickHandlar={deleteContactHandler} key={contact.id} />

    )
  })
  const getSearchTerm = () => {

    props.searchKeyword(inputEl.current.value);

  }

  return (

    <div>
      <h2>Contact List </h2>
      <Link to='/add'>
        <button>Add Contact</button>
      </Link>
      <input type='search' placeholder='search here...' value={props.term} onChange={getSearchTerm} ref={inputEl} />
      {renderContactList.length > 0 ? renderContactList : "No Contacts available in this list"}
    </div>
  )
}

export default ContactList
