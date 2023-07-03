import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import uuidv4 from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import React, { useState, useEffect } from 'react';
import ContactDetail from './ContactDetail';
import api from '../api/contacts'
import EditContact from './EditContact';
export default function App() {

  // const contacts =
  //   [{
  //     id: '1',
  //     name: 'praba',
  //     email: "praba@gmail.com"

  //   },
  //   {
  //     id: '2',
  //     name: 'Karan',
  //     email: "karan@gmail.com"

  //   }]
  console.log(uuidv4())
  // const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setSearchResult] = useState([])


  // Retrive Contacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data
  }

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = { id: uuidv4(), ...contact }
    const response = await api.post('/contacts', request)
    console.log(response);
    setContacts([...contacts, response.data])
  }
  const updateContactHandler = async (contact) => {
    console.log(contact.id);
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const { id, } = response.data
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.date } : contact
      })
    )
  }

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retriveContacts) setContacts(retriveContacts)

    const getAllContacts = async () => {
      const allContacts = await retriveContacts()
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts()
  }, [])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    }
    )
    setContacts(newContactList)
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        //console.log(Object.values(contact).join(" "));
        return Object.values(contact).join(' ').toLowerCase().includes(searchTerm.toLowerCase())
      })

      setSearchResult(newContactList)
    } else {
      setSearchResult(contacts)
    }
  }

  return (
    <div>

      <Router>
        <Header />

        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
          <Route path="/" element={<ContactList
            contacts={searchTerm.length < 1 ? contacts : searchResult}
            getContactId={removeContactHandler}
            term={searchTerm}
            searchKeyword={searchHandler}
          />} />
          <Route path='/contact/:id' element={<ContactDetail />} />



          {/* <Route path="/add" Component={() => <AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" exact Component={() => <ContactList contacts={contacts} getContactId={removeContactHandler} />} /> */}
        </Routes>
      </Router>

      {/* <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}

    </div>
  );
}

// export default App;
