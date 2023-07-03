// import React, { Component } from 'react'
// import { useNavigate } from 'react-router-dom';

// export class AddContact extends Component {
//   state = { name: '', email: '' }

//   add = (e) => {
//     e.preventDefault()
//     const navigate = useNavigate();
//     if (this.state.name === '' || this.state.email === '') {
//       alert("All the field are mandatory")
//       return
//     }

//     console.log(this.state);
//     this.props.addContactHandler(this.state)
//     this.setState({ name: "", email: '' })
//     console.log(this.props);
//     navigate('/home')
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.add}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Name"
//             value={this.state.name}
//             onChange={(e) => {
//               this.setState({ name: e.target.value })
//             }}
//           />
//           <br />
//           <label htmlFor="email">Email:</label>
//           <input type="text" id="email" placeholder="Email"
//             value={this.state.email}
//             onChange={(e) => {
//               this.setState({ email: e.target.value })
//             }} />
//           <br />

//           <button>Add</button>

//         </form>
//       </div>
//     )
//   }
// }

// export default AddContact


// import React, { Component } from 'react';
// import { useNavigate } from 'react-router-dom';

// class AddContact extends Component {
//   state = {
//     name: '',
//     email: ''
//   };

//   add = (e) => {
//     e.preventDefault();
//     const navigate = useNavigate();
//     if (this.state.name === '' || this.state.email === '') {
//       alert("All the fields are mandatory");
//       return;
//     }

//     console.log(this.state);
//     this.props.addContactHandler(this.state);
//     this.setState({ name: '', email: '' });
//     console.log(this.props);
//     navigate('/home');
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.add}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Name"
//             value={this.state.name}
//             onChange={(e) => {
//               this.setState({ name: e.target.value });
//             }}
//           />
//           <br />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={(e) => {
//               this.setState({ email: e.target.value });
//             }}
//           />
//           <br />

//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;


import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: ''
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      alert("All the fields are mandatory");
      return;
    }

    console.log(this.state);
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });

    window.location.href = '/';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <br />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

