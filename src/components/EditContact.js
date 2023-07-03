import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const EditContact = (props) => {

  const location = useLocation();
  const state = location.state
  const { id } = state.contact
  const [name, setName] = useState(state.contact.name)
  const [email, setEmail] = useState(state.contact.email)

  const update = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert("All the fields are mandatory");
      return;
    }

    props.updateContactHandler({ id, name, email });
    setName("")
    setEmail('')
    window.location.href = '/';
  };

  return (
    <div>
      <form onSubmit={update}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default EditContact;

