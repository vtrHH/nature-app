import React, { Component } from 'react';
import { signUp } from './../services/authentication';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    role: '',
    profilePicture: ''
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { username, email, password, role, profilePicture } = this.state;
    const body = new FormData();
    body.append('username', username);
    body.append('email', email);
    body.append('password', password);
    body.append('role', role);
    body.append('profilePicture', profilePicture);
    console.log(profilePicture);
    const user = await signUp(body);
    this.props.onUserChange(user);
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const file = files[0];
    this.setState({
      [name]: file
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <main>
        <header>
          <h1>Sign Up</h1>
        </header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="username-input">User Name</label>
          <input
            id="username-input"
            type="text"
            placeholder="username"
            name="username"
            required
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          {/* <label htmlFor="firstname-input">First Name</label>
          <input
            id="firstname-input"
            type="text"
            placeholder="John"
            name="firstname"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="lastname-input">Last Name</label>
          <input
            id="lastname-input"
            type="text"
            placeholder="Doe"
            name="lastname"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          /> */}

          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            placeholder="email@email.com"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <label htmlFor="role-input">
            Are you an individual or an organisation?
          </label>
          <select
            id="role-input"
            name="role"
            required
            value={this.state.role}
            onChange={this.handleInputChange}
          >
            <option value="" disabled>
              Individual or organisation?
            </option>
            <option value="individual">Individual</option>
            <option value="organisation">Organisation</option>
          </select>

          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="password"
            placeholder="A secure password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-picture">Profile picture</label>
          <input
            id="input-picture"
            type="file"
            name="profilePicture"
            onChange={this.handleFileInputChange}
          />

          <button>Sign Up</button>
        </form>
      </main>
    );
  }
}

export default SignUp;
